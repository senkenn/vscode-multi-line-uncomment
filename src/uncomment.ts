import * as vscode from 'vscode';

export class Uncomment {

  private readonly rows: readonly string[];

  /**
   * コンストラクタ
   * @param {string} text 選択範囲の文字列
   */
  public constructor(text: string) {
    this.rows = text.split(/\r\n|\n/); // 改行で行ごとに分割する
  }

  /**
   * 複数行コメントの場所を検出する
   * @return [ コメント開始位置配列, コメント終了位置配列 ]
   */
  public detectMultiLineCommentPos(): readonly vscode.Position[][] {

    const commentStartPosArr: vscode.Position[] = [];
    const commentEndPosArr: vscode.Position[] = [];
    const rows = this.rows;

    for(let i = 0; i < rows.length; i++) {
      for(let j = 0; j < rows[i].length - 1; j++) {

        // コメント先頭行の検出
        if(rows[i][j] === '/' && rows[i][j + 1] === '*') {
          const position = new vscode.Position(i + 1, j); // +1 にして先頭行を削除
          commentStartPosArr.push(position);
        }

        // コメント最終行の検出
        if(rows[i][j] === '*' && rows[i][j + 1] === '/') {
          const position = new vscode.Position(i, j - 1); // アンコメント対象はこの行を含まない
          commentEndPosArr.push(position);
        }
      }
    }

    return [commentStartPosArr, commentEndPosArr];
  }

  /**
   * アンコメントする（コメント部の削除をする）
   */
  public uncomment(range: vscode.Range): string {

    const start = range.start;
    const end = range.end;
    const commentColumnNum = 3;
    const uncommentRows: string[] = [];
    for(let i = start.line; i < end.line; i++) {
      uncommentRows.push(
        this.rows[i].slice(0, start.character)
        + this.rows[i].slice(start.character + commentColumnNum));
    }
    uncommentRows.push('');

    return uncommentRows.join('\n'); // 一つの文字列に結合して返す
  }

}