import * as vscode from 'vscode';

import { Uncomment } from './uncomment';

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

    // 選択開始位置からではなく、行頭から文字列を取得する
    const startPos = new vscode.Position(selection.start.line, 0);
    const selectedLinesRange = new vscode.Range(startPos, selection.end);
    const selectedText = document.getText(selectedLinesRange);

    // コメント行の検索
    const uncomment = new Uncomment(selectedText);
    const [commentStartPosArr, commentEndPosArr] = uncomment.detectMultiLineCommentPos();

    // コメントの先頭行と終端行の数が揃わなければ標準のコメント処理をして終了
    if(commentStartPosArr.length !== commentEndPosArr.length) {
      await vscode.commands.executeCommand('editor.action.commentLine');
      return;
    }

    const ranges = commentStartPosArr.map((unused, i) => 
      new vscode.Range(commentStartPosArr[i], commentEndPosArr[i])
    );
    console.log(ranges);
      
    await editor.edit(editBuilder => {
      editBuilder.replace(selectedLinesRange, uncomment.uncomment(ranges));
    });

  });

  context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate(): void { }
