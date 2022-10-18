import * as vscode from 'vscode';

/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 */
export function activate(context: vscode.ExtensionContext): void {

  const disposable = vscode.commands.registerCommand('vscode.multi.line.uncomment.uncomment', async () => {

    const editor = vscode.window.activeTextEditor;
    if(!editor) { // ファイルを何も開いていなかったら何もしない
      return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const selectedText = document.getText(selection);
    
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, uncomment(selectedText));
    });
  });

  context.subscriptions.push(disposable);
}

/**
 * コメントアウトを解除する
 */
function uncomment(text: string): string {
  let result = '';
  console.log(text.length);
  for(let i = 0; i < text.length; i++) {

    // starred block の先頭行の判定
    if(text[i] === '/' && text[i + 1] === '*') {

      // 行端に達するまで進める
      while(text[i] !== '\n') {
        i++;
      }

      i++; // 改行の消去
    }
    
    result += text[i];
    console.log(text[i]);

    // TODO: #7 中間行

    // starred block の最終行の判定
    if(text[i + 1] === '*' && text[i + 2] === '/') {

      // 行端に達するまで進める
      while(text[i] !== '\n') {
        i++;
        console.log(i);
      }

      i++; // 改行の消去
    }
  }
  
  return result;
}

/**
 * This method is called when your extension is deactivated
 */ 
export function deactivate(): void {}
