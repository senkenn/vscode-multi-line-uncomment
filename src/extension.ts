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
  
  const rows = text.split(/\r\n|\n/); // 改行で行を分ける  
  const len = rows.length;
  const rowsWithMiddle = rows.splice(1, len - 3); // 先頭行と最終行を除外

  // TODO: #7 中間行
  
  const result = rowsWithMiddle.join('\n'); // 一つの文字列に結合

  return result;
}

/**
 * This method is called when your extension is deactivated
 */ 
export function deactivate(): void {}
