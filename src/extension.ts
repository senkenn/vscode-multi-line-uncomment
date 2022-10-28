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

    // 選択開始位置からではなく、行全体の文字列を取得するように範囲の変更
    const startPos = new vscode.Position(selection.anchor.line, 0);
    const selectedLinesRange = new vscode.Range(startPos, selection.end);
    const selectedText = document.getText(selectedLinesRange);

    // コメント行の検索
    const uncomment = new Uncomment(selectedText);
    const [commentStartPosArr, commentEndPosArr] = uncomment.detectMultiLineCommentPos();

    // コメント行が何もなければ標準のコメント処理をして終了
    if(!commentStartPosArr.length || !commentEndPosArr.length) {
      await vscode.commands.executeCommand('editor.action.commentLine');
      return;
    }

    // アンコメント処理
    const range = new vscode.Range(commentStartPosArr[0], commentEndPosArr[0]);
    
    // NOTE: Position.translate(): Create a new position relative to this position.
    const commentStartPosInEditor = selection.start.translate(commentStartPosArr[0].line);
    const commentEndPosInEditor = commentStartPosInEditor.translate(commentEndPosArr[0].line);
    const commentRangeInEditor = new vscode.Range(commentStartPosInEditor, commentEndPosInEditor);

    await editor.edit(editBuilder => {
      editBuilder.replace(commentRangeInEditor, uncomment.uncomment(range));
    });

  });

  context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate(): void { }
