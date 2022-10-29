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
          const position = new vscode.Position(i, j);
          commentStartPosArr.push(position);
        }

        // コメント最終行の検出
        if(rows[i][j] === '*' && rows[i][j + 1] === '/') {
          const position = new vscode.Position(i + 1, j - 1);
          commentEndPosArr.push(position);
        }
      }
    }

    return [commentStartPosArr, commentEndPosArr];
  }

  /**
   * アンコメントする（コメント部の削除をする）
   * @param commentRanges コメント行の範囲の配列
   * @return アンコメント後の文字列
   */
  public uncomment(commentRanges: vscode.Range[]): string {

    let commentNo = 0;
    const uncommentRows: string[] = [];
    for(const [rowLine, row] of this.rows.entries()) {
      const commentRange = commentNo < commentRanges.length
        ? commentRanges[commentNo]
        : new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 0));

      if(rowLine === commentRange.end.line) {
        commentNo++;
      }

      if(rowLine === commentRange.start.line || rowLine === commentRange.end.line) {
        continue;
      }

      const isInRange = (commentRange.start.line <= rowLine) && (rowLine < commentRange.end.line);
      console.log(commentNo, commentRange, isInRange, row);
      
      if(isInRange) {
        const commentColumnNum = 3;
        const strBeforeComment = row.slice(0, commentRange.start.character);
        const strAfterComment = row.slice(commentRange.start.character + commentColumnNum);

        uncommentRows.push(strBeforeComment + strAfterComment);
      } else {
        uncommentRows.push(row);
      }
    }

    return uncommentRows.join('\n'); // 一つの文字列に結合して返す
  }

}
