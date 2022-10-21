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
  const resultRows: string[] = [];

  let isCommentLine = false;
  let commentStartColumn = 0;
  for(let i = 0; i < rows.length; i++) {
    for(let j = 0; j < rows[i].length; j++) {

      // コメント先頭行の検出
      if(rows[i][j] === '/' && rows[i][j + 1] === '*') {
        isCommentLine = true;
        commentStartColumn = j;
      }

      // コメント最終行の検出
      if(rows[i][j] === '*' && rows[i][j + 1] === '/') {
        isCommentLine = false;
      }
    }
    
    // コメント行ならアンコメントする
    let newRow = rows[i];
    if(isCommentLine) {
      const commentColumns = 3;
      newRow = rows[i].slice(0, commentStartColumn) + rows[i].slice(commentStartColumn + commentColumns);
    }
    
    resultRows.push(newRow);
  }
  
  const resultText = resultRows.join('\n'); // 一つの文字列に結合

  return resultText;
}

/**
 * This method is called when your extension is deactivated
 */ 
export function deactivate(): void {}
