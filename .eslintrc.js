module.exports = {
  "root": true,
  'env': {
    'node': true,
    'es6': true
  },
  'globals': {},
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  'plugins': ['@typescript-eslint', 'node'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
    'tsconfigRootDir': __dirname,
    'project': ['./tsconfig.json']
  },
  'rules': {
    'prettier/prettier': 'off',

    /**
     * 1行あたりの文字数を制限
     * @see https://eslint.org/docs/rules/max-len
     *
     * @description
     * code                   : 140文字
     * ignoreStrings          : 文字列を含む行を無視する
     * ignoreTemplateLiterals : テンプレートリテラルを含む行を無視する
     * ignoreRegExpLiterals   : 正規表現を含む行を無視する
     * ignoreComments         : 末尾のコメントと自分の行のコメントをすべて無視する
     */
    'max-len': ['error', { 'code': 140, 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true, 'ignoreComments': true }],

    /**
     * 配列の括弧と他のトークンの間にスペースを入れる
     * @see https://eslint.org/docs/rules/array-bracket-spacing#disallow-or-enforce-spaces-inside-of-brackets-array-bracket-spacing
     * @fix
     *
     * @description
     * singleValue      : 要素が１つの時はスペースを入れない
     * arraysInArrays   : 配列の要素が配列のときはスペースを入れない
     * objectsInArrays  : 配列の要素がオブジェクトのときはスペースを入れない
     */
    'array-bracket-spacing': ['error', 'never', { singleValue: false, arraysInArrays: false, objectsInArrays: false }],

    /**
     * オブジェクト要素の開始および終了の中括弧の間に間隔が必要
     * @see https://eslint.org/docs/rules/object-curly-spacing#enforce-consistent-spacing-inside-braces-object-curly-spacing
     * @fix
     *
     * @description
     * objectsInObjects: オブジェクトの要素がオブジェクトのときはスペースを入れない
     */
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],

    /**
     * オブジェクト要素の一番最後にコンマを入れない
     * @see https://eslint.org/docs/user-guide/migrating-to-8.0.0#comma-dangle
     * @fix
     */
    'comma-dangle': ['error', 'never'],

    /**
     * 配列及び、オブジェクトの要素を複数行にわたって記述するとき、コンマの位置を改行直前にする
     * @see https://eslint.org/docs/rules/comma-style#comma-style-comma-style
     * @fix
     */
    'comma-style': ['error', 'last'],

    /**
     * オブジェクト要素のキーとバリューの間にスペースをいれるか
     * @see https://eslint.org/docs/rules/key-spacing#enforce-consistent-spacing-between-keys-and-values-in-object-literal-properties-key-spacing
     * @fix
     *
     * @description
     * beforeColon  : コロンの前にスペースは入れない
     * afterColon   : コロンの後にスペースを入れる
     * align        : 複数行にわたるときにコロンを立てにそろえる
     */
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'align': 'colon'
      }
    ],

    /**
     * キーワードの前後にスペースを入れるか
     * @see https://eslint.org/docs/rules/keyword-spacing#enforce-consistent-spacing-before-and-after-keywords-keyword-spacing
     * @fix
     *
     * @description
     * before           : キーワードの前にスペースを入れる
     * after            : キーワードの後にスペースを入れる
     * overrides.if     : ifキーワードの後にはスペースを入れない
     * overrides.for    : forキーワードの後にはスペースを入れない
     * overrides.while  : whileキーワードの後にはスペースを入れない
     * overrides.switch : switchキーワードの後にはスペースを入れない
     */
    'keyword-spacing': ['error', { 'before': true, 'after': true, 'overrides': { 'if': { 'after': false }, 'for': { 'after': false }, 'while': { 'after': false }, 'switch': { 'after': false } } }],

    /**
     * 関数と括弧の間にスペースを入れるか
     * @see https://eslint.org/docs/rules/space-before-function-paren#require-or-disallow-a-space-before-function-parenthesis-space-before-function-paren
     * @fix
     *
     * @description
     * anonymous  : 匿名関数式の時はスペースを入れない
     * named      : 名前付き関数式の時はスペースを入れない
     * asyncArrow : 非同期アロー関数式の時はスペースを入る
     */
    'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],

    /**
     * コンソールの使用を許可する
     * @see https://eslint.org/docs/rules/no-console#disallow-the-use-of-console-no-console
     */
    'no-console': 'off',

    /**
     * デバッカーの使用を禁止する
     * @see https://eslint.org/docs/rules/no-debugger#disallow-the-use-of-debugger-no-debugger
     */
    'no-debugger': 'error',

    /**
     * 文字列を表現する時はシングルクォーテーションを使用する
     * @see https://eslint.org/docs/rules/quotes#enforce-the-consistent-use-of-either-backticks-double-or-single-quotes-quotes
     * @fix
     */
    'quotes': ['error', 'single'],

    /**
     * オブジェクト要素のプロパティ名を必要に応じて引用符で囲む
     * @see https://eslint.org/docs/rules/quote-props#require-quotes-around-object-literal-property-names-quote-props
     * @fix
     */
    "quote-props": ['error', "as-needed"],

    /**
     * インデントをスペース２つとする
     * @see https://eslint.org/docs/rules/indent#enforce-consistent-indentation-indent
     * @fix
     */
    'indent': ['error', 2],

    /**
     * 各ステートメントの最後にはセミコロンを配置する
     * @see https://eslint.org/docs/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi
     * @fix
     */
    'semi': ['error', 'always'],

    /**
     * セミコロンの前後にスペースを入れる
     * @see https://eslint.org/docs/rules/semi-spacing#enforce-spacing-before-and-after-semicolons-semi-spacing
     * @fix
     *
     * @description
     * before : セミコロンの前にスペースを入れない
     * after  : セミコロンの後にスペースを入れる
     */
    'semi-spacing': ['error', { 'before': false, 'after': true }],

    /**
     * コンマの前後にスペースを入れる
     * @see https://eslint.org/docs/rules/comma-spacing#enforces-spacing-around-commas-comma-spacing
     * @fix
     *
     * @description
     * before : セミコロンの前にスペースを入れない
     * after  : セミコロンの後にスペースを入れる
     */
    'comma-spacing': ['error', { 'before': false, 'after': true }],

    /**
     * セミコロンはステートメントの最後に配置する
     * @see https://eslint.org/docs/rules/semi-style#enforce-location-of-semicolons-semi-style
     * @fix
     */
    'semi-style': ['error', 'last'],

    /**
     * 不必要なセミコロンの記述はしない
     * @see https://eslint.org/docs/rules/no-extra-semi#disallow-unnecessary-semicolons-no-extra-semi
     * @fix
     */
    'no-extra-semi': 'error',

    /**
     * 中置演算子の周りにスペースを入れる
     * @see https://eslint.org/docs/rules/space-infix-ops#require-spacing-around-infix-operators-space-infix-ops
     * @fix
     */
    'space-infix-ops': 'error',

    /**
     * 紛らわしい複数行の式を許可しない
     * @see https://eslint.org/docs/rules/no-unexpected-multiline#disallow-confusing-multiline-expressions-no-unexpected-multiline
     */
    'no-unexpected-multiline': 'error',

    /**
     * 到達不能なループを禁止
     * @see https://eslint.org/docs/rules/no-unreachable-loop#disallow-loops-with-a-body-that-allows-only-one-iteration-no-unreachable-loop
     */
    'no-unreachable': 'error',

    /**
     * テンプレートリテラルの括弧と変数との間にスペースを入れない
     * @see https://eslint.org/docs/rules/template-curly-spacing#enforce-usage-of-spacing-in-template-strings-template-curly-spacing
     * @fix
     */
    'template-curly-spacing': ['error', 'never'],

    /**
     * 関数の括弧と中括弧の間にスペースを入れる
     * @see https://eslint.org/docs/rules/space-before-blocks#require-or-disallow-space-before-blocks-space-before-blocks
     * @fix
     */
    'space-before-blocks': ['error', 'always'],

    /**
     * 計算されたプロパティ内のスペースを禁止
     * @see https://eslint.org/docs/rules/computed-property-spacing#disallow-or-enforce-spaces-inside-of-computed-properties-computed-property-spacing
     * @fix
     *
     * @example
     * var obj = { prop: "value" };
     * var a = "prop";
     * var x = obj[a]; ← これ
     */
    'computed-property-spacing': 'error',

    /**
     * 関数スコープの使用を禁止する
     * @see @typescript-eslint/no-unused-vars
     * @see https://eslint.org/docs/rules/no-var#require-let-or-const-instead-of-var-no-var
     * @fix
     */
    'no-var': 'error',

    /**
     * varとletの変数宣言は同時に１つまでとする
     * @see https://eslint.org/docs/rules/one-var#enforce-variables-to-be-declared-either-together-or-separately-in-functions-one-var
     * @fix
     */
    'one-var': ['error', 'never'],

    /**
     * finally句でreturn , throw, breakの使用を禁止
     * @see https://eslint.org/docs/rules/no-unsafe-finally#disallow-control-flow-statements-in-finally-blocks-no-unsafe-finally
     */
    'no-unsafe-finally': 'error',

    /**
     * リテラル型のthrowを禁止
     * @see https://eslint.org/docs/rules/no-throw-literal#restrict-what-can-be-thrown-as-an-exception-no-throw-literal
     */
    'no-throw-literal': 'error',

    /**
     * 等価式には===と!==を使用する
     * @see https://eslint.org/docs/rules/eqeqeq#require--and--eqeqeq
     * @fix
     */
    'eqeqeq': ['error', 'always'],

    /**
     * 全ての制御文は中括弧を使用する
     * @see https://eslint.org/docs/rules/curly#require-following-curly-brace-conventions-curly
     * @fix
     */
    'curly': ['error', 'all'],

    /**
     * 開始の中括弧はブレーススタイルを適用
     * @see https://eslint.org/docs/rules/brace-style#require-brace-style-brace-style
     * @fix
     */
    'brace-style': ['error', '1tbs'],

    /**
     * ファイルの最終行は空行とする
     * @see https://eslint.org/docs/rules/eol-last#require-or-disallow-newline-at-the-end-of-files-eol-last
     * @fix
     */
    'eol-last': ['error', 'always'],

    /**
     * 連続する空行は１行までとする
     * @see https://eslint.org/docs/rules/no-multiple-empty-lines#disallow-multiple-empty-lines-no-multiple-empty-lines
     * @fix
     */
    'no-multiple-empty-lines': ['error', { max: 1 }],

    /**
     * 三項演算子をネストしない
     * @see https://eslint.org/docs/rules/no-nested-ternary#disallow-nested-ternary-expressions-no-nested-ternary
     */
    'no-nested-ternary': 'error',

    /**
     * ブロックを開いた後、ブロックを閉じる前にスペースを入れる
     * @see https://eslint.org/docs/rules/block-spacing#disallow-or-enforce-spaces-inside-of-blocks-after-opening-block-and-before-closing-block-block-spacing
     * @fix
     */
    'block-spacing': ['error', 'always'],

    /**
     * varを使用するときは一番上位のブロックに宣言する
     * @see https://eslint.org/docs/rules/block-scoped-var#treat-var-as-block-scoped-block-scoped-var
     */
    'block-scoped-var': 'error',

    /**
     * スプレッド演算子と変数の間にスペースを入れない
     * @see https://eslint.org/docs/rules/rest-spread-spacing#enforce-spacing-between-rest-and-spread-operators-and-their-expressions-rest-spread-spacing
     * @fix
     */
    'rest-spread-spacing': 'error',

    /**
     * switchのcase句でブロックを利用せずに変数や関数を定義するするのを禁止
     * @see https://eslint.org/docs/rules/no-case-declarations#disallow-lexical-declarations-in-casedefault-clauses-no-case-declarations
     */
    'no-case-declarations': 'error',

    /**
     * 派生クラスのコンストラクタは抽象クラスのコンストラクタを必ず呼び出す
     * @see https://eslint.org/docs/rules/constructor-super#verify-calls-of-super-in-constructors-constructor-super
     */
    'constructor-super': 'error',

    /**
     * Promiseをreturnする時はawait句を利用しない
     * @see https://eslint.org/docs/rules/no-return-await#disallows-unnecessary-return-await-no-return-await
     */
    'no-return-await': 'error',

    /**
     * new演算子を付ける場合は明示的に関数呼び出しを行う
     * @see https://eslint.org/docs/rules/new-parens#require-parentheses-when-invoking-a-constructor-with-no-arguments-new-parens
     * @fix
     */
    'new-parens': 'error',

    /**
     * 変数の値を変更しない場合はconstで変数を定義する
     * @see https://eslint.org/docs/rules/prefer-const#suggest-using-const-prefer-const
     * @fix
     */
    'prefer-const': 'error',

    /**
     * 重複するcase句を定義しない
     * @see https://eslint.org/docs/rules/no-duplicate-case#rule-to-disallow-a-duplicate-case-label-no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * NaN値との比較をする時はisNaNを利用する
     * @see https://eslint.org/docs/rules/use-isnan#require-calls-to-isnan-when-checking-for-nan-use-isnan
     */
    'use-isnan': 'error',

    /**
     * オブジェクトをfor inループする時、ifステートメントで結果をフィルタリングする
     * @see https://eslint.org/docs/rules/guard-for-in#require-guarding-for-in-guard-for-in
     */
    'guard-for-in': 'error',

    /**
     * 連続して複数のスペースを入れない
     * @see https://eslint.org/docs/rules/no-multi-spaces#disallow-multiple-spaces-no-multi-spaces
     * @fix
     */
    'no-multi-spaces': 'error',

    /**
     * ネイティブオブジェクトの再割り当てを禁止する
     * @see https://eslint.org/docs/rules/no-native-reassign#disallow-reassignment-of-native-objects-no-native-reassign
     */
    'no-native-reassign': 'error',

    /**
     * 関数コンストラクタを禁止する
     * @see https://eslint.org/docs/rules/no-new-func#disallow-function-constructor-no-new-func
     */
    'no-new-func': 'error',

    /**
     * プリミティブ型にnew演算子を利用しない
     * @see https://eslint.org/docs/rules/no-new-wrappers#disallow-primitive-wrapper-instances-no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * case句でフォールスルーを禁止する
     * @see https://eslint.org/docs/rules/no-fallthrough#disallow-case-statement-fallthrough-no-fallthrough
     *
     * @description
     * ただし、次の時はフォールスルーを許可する
     *
     * ex.1
     * switch(1) {
     * case1:
     * case2:
     *   break;
     * }
     *
     * ex.2
     * switch(1) {
     * case1:
     *   XXX();
     *   // falls through
     * case2:
     *   break;
     * }
     */
    'no-fallthrough': 'error',

    /**
     * アクセサーを使用時はget/setペアで定義する
     * @see https://eslint.org/docs/rules/accessor-pairs#enforces-gettersetter-pairs-in-objects-and-classes-accessor-pairs
     */
    'accessor-pairs': 'error',

    /**
     * 短い型変換を禁止する
     * @see https://eslint.org/docs/rules/no-implicit-coercion#disallow-the-type-conversion-with-shorter-notations-no-implicit-coercion
     * @fix
     */
    'no-implicit-coercion': 'error',

    /**
     * ループ内の関数定義を禁止する
     * @see https://eslint.org/docs/rules/no-loop-func#disallow-functions-in-loops-no-loop-func
     */
    'no-loop-func': 'error',

    /**
     * Class以外でthisキーワードの使用を禁止する
     * @see https://eslint.org/docs/rules/no-invalid-this#disallow-this-keywords-outside-of-classes-or-class-like-objects-no-invalid-this
     */
    'no-invalid-this': 'error',

    /**
     * アラートの使用を禁止する
     * @see https://eslint.org/docs/rules/no-alert#disallow-use-of-alert-no-alert
     */
    'no-alert': 'error',

    /**
     * 小数点の前後が0であっても省略しない
     * @see https://eslint.org/docs/rules/no-floating-decimal#disallow-floating-decimals-no-floating-decimal
     * @fix
     */
    'no-floating-decimal': 'error',

    /**
     * Classを初期化するときはnew演算子を利用する
     * @see https://eslint.org/docs/rules/no-new#disallow-new-for-side-effects-no-new
     */
    'no-new': 'error',

    /**
     * arguments.callerとarguments.calleeの使用を禁止する
     * @see https://eslint.org/docs/rules/no-caller#disallow-use-of-callercallee-no-caller
     */
    'no-caller': 'error',

    /**
     * 条件式で変数の代入を禁止する
     * @see https://eslint.org/docs/rules/no-constant-condition#disallow-constant-expressions-in-conditions-no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * parseIntを用いるときは基数を明示する
     * @see https://eslint.org/docs/rules/radix#require-radix-parameter-radix
     */
    'radix': 'error',

    /**
     * ８進エスケープシーケンスの使用を禁止する
     * @see https://eslint.org/docs/rules/no-octal-escape#disallow-octal-escape-sequences-in-string-literals-no-octal-escape
     */
    'no-octal-escape': 'error',

    /**
     * 8進数の数値リテラルの使用を禁止する
     * @see https://eslint.org/docs/rules/no-octal#disallow-octal-literals-no-octal
     */
    'no-octal': 'error',

    /**
     * コメントの最初にはスペースを入れる
     * @see https://eslint.org/docs/rules/spaced-comment#requires-or-disallows-a-whitespace-space-or-tab-beginning-a-comment-spaced-comment
     * @fix
     */
    'spaced-comment': ['error', "always", { "block": { "exceptions": ["*"] } }],

    /**
     * コメントの前に空行をいれる
     * @see https://eslint.org/docs/rules/lines-around-comment#require-empty-lines-around-comments-lines-around-comment
     * @fix
     *
     * @description
     * beforeBlockComment : ブロックコメントの前に空行を入れる
     * afterBlockComment  : ブロックコメントの後に空行を入れない
     * beforeLineComment  : 行コメントの前に空行を入れる
     * afterLineComment   : 行コメントの前に空行を入れない
     * allowClassStart    : クラスの開始直後の行は空行を入れる
     */
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowClassStart: false
      }
    ],

    /**
     * JSDocを入れる
     * @see https://eslint.org/docs/rules/require-jsdoc#require-jsdoc-comments-require-jsdoc
     *
     * @description
     * FunctionDeclaration      : 関数にコメントを入れる
     * MethodDefinition         : メソッドにコメントを入れる
     * ClassDeclaration         : Classデコレーションにコメントを入れなくてもいい
     * ArrowFunctionExpression  : アロー関数にコメントを入れなくてもいい
     * FunctionExpression       : 匿名関数にコメントを入れなくてもいい
     */
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false,
        'FunctionExpression': false
      }
    }],

    /**
     * 複数行のコメントはブロックコメントにする
     * @see https://eslint.org/docs/rules/multiline-comment-style#enforce-a-particular-style-for-multiline-comments-multiline-comment-style
     * @fix
     */
    'multiline-comment-style': ['error', 'starred-block'],

    /**
     * 循環的複雑度を20までとする
     * @see https://eslint.org/docs/rules/complexity#limit-cyclomatic-complexity-complexity
     */
    'complexity': ['error', { 'max': 20 }],

    /**
     * メンバーのドット前に改行を入れる
     * @see https://eslint.org/docs/rules/dot-location#enforce-newline-before-and-after-dot-dot-location
     * @fix
     */
    'dot-location': ['error', 'property'],

    /**
     * 変数の再宣言を禁止する
     * @see https://eslint.org/docs/rules/no-redeclare#disallow-variable-redeclaration-no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * ヨーダ記法を使用しない
     * @see https://eslint.org/docs/rules/yoda#require-or-disallow-yoda-conditions-yoda
     * @fix
     *
     * @description
     * exceptRange: 範囲を示す時はヨーダ記法を使用していい
     */
    'yoda': ['error', "never", { "exceptRange": true }],

    /**
     * インポートされたメンバーをソートしない
     * @see https://eslint.org/docs/rules/sort-imports#import-sorting-sort-imports
     * @fix
     *
     * @description
     * eslintのソート機能とprettierが競合を起こすため外部ツールにメンバーソートを移譲するためにoffにしている
     * VSCode拡張機能のTypeScript Import Sorterを用いてインポートされたメンバーをソートする
     */
    'sort-imports': 'off',

    /**
     * default exportを許可しない
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     *
     * @description
     * import 'reflect-metadata';を使用する場合はこのエラーが発生するため機能を切っている。
     */
    "import/no-default-export": "off",

    /**
     * プリミティブ型の変数定義時に明示的型宣言を許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
     */
    '@typescript-eslint/no-inferrable-types': 'off',

    /**
     * 空の関数を許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-function.md
     */
    '@typescript-eslint/no-empty-function': 'off',

    /**
     * any型の使用を許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'off',

    /**
     * ts-ignoreの使用を許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
     *
     * @description
     * import 'reflect-metadata';を使用する場合はこのエラーが発生するため機能を切っている。
     */
    '@typescript-eslint/ban-ts-ignore': 'off',

    /**
     * 関数の明示的な元リ値と引数の型がanyであることを許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * トリプルスラッシュ参照ディレクティブの使用を禁止する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /**
     * モジュールと名前空間の使用を禁止する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
     *
     * @description
     * allowDeclarations: declare内での使用は許可する
     */
    '@typescript-eslint/no-namespace': ['error', { 'allowDeclarations': true }],

    /**
     * 関数の返却型を明示する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     *
     * @description
     * allowExpressions: true の場合、宣言の一部である関数だけがチェックされます。
     */
    '@typescript-eslint/explicit-function-return-type': ['error', {
      'allowExpressions': true
    }],

    /**
     * 変数の再宣言を禁止する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
     */
    '@typescript-eslint/no-redeclare': 'error',

    /**
     * 型注釈の前にスペースを入れる
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
     *
     * @description
     * before                 : 型注釈の前にスペースを入れない
     * after                  : 型注釈の後にスペースを入れる
     * overrides.arrow.before : アロー式の前にスペースを入れる
     * overrides.arrow.after  : アロー式の後にスペースを入れる
     * overrides.colon.before : コロンの前にスペースを入れない
     * overrides.colon.after  : コロンの後にスペースを入れる
     */
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true,
      'overrides': {
        'arrow': { 'before': true, 'after': true },
        'colon': { 'before': false, 'after': true }
      }
    }],

    /**
     * 変数とプロパティのany割り当てを許可する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',

    /**
     * メンバーのないInterfaceの定義を許可する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    "@typescript-eslint/no-empty-interface": "off",

    /**
     * 関数の返却値にanyを指定するのを許可する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-return.md
     */
    "@typescript-eslint/no-unsafe-return": "off",

    /**
     * 関数の引数にany型の変数の代入を許可する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
     */
    '@typescript-eslint/no-unsafe-argument': 'off',

    /**
     * anyオブジェクトのメンバーアクセスを許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',

    /**
     * メンバー変数をアクセサーに基づいて並べる
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
     *
     * @description
     * 並べる順番はリンクを参照
     */
    '@typescript-eslint/member-ordering': 'error',

    /**
     * unionで指定するパラメータをアルファベット順にソートする
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
     */
    '@typescript-eslint/sort-type-union-intersection-members': 'error',

    /**
     * varの使用を禁止する
     * @see no-var
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    '@typescript-eslint/no-unused-vars': 'error',

    /**
     * anyオブジェクトの呼び出しを許容する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-call.md
     */
    '@typescript-eslint/no-unsafe-call': 'off',

    /**
     * アクセサーの定義をする
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': 'error',

    /**
     * 特定の型の仕様を禁止する
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md
     *
     * @description
     * 以下のかたはJavascript上の型のためTypescriptでは使用しない
     * - String
     * - Number
     * - Object
     * - Boolean
     * - Array
     */
    '@typescript-eslint/ban-types': ['error', {
      'types': {
        'String': {
          'message': 'Use string instead',
          'fixWith': 'string'
        },
        'Number': {
          'message': 'Use number instead',
          'fixWith': 'number'
        },
        'Object': {
          'message': 'Use object instead',
          'fixWith': 'object'
        },
        'Boolean': {
          'message': 'Use boolean instead',
          'fixWith': 'boolean'
        },
        'Array': {
          'message': 'Use [] instead',
          'fixWith': '[]'
        }
      }
    }],

    /**
     * 配列を定義する時は括弧を用いる
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
     */
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'array',
        'readonly': 'array'
      }
    ],

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
     */
    '@typescript-eslint/restrict-plus-operands': 'off',

    /**
     * 命名規則
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
     */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      },
      {
        'selector': 'class',
        'format': ['PascalCase']
      },
      {
        'selector': 'typeAlias',
        'format': ['PascalCase']
      },
      {
        'selector': 'function',
        'format': ['camelCase']
      },
      {
        'selector': 'method',
        'format': ['camelCase']
      },
      {
        'selector': 'variable',
        'format': ['camelCase', 'PascalCase', 'snake_case']
      },
      {
        'selector': 'parameterProperty',
        'format': ['camelCase']
      },
      {
        'selector': 'property',
        'format': ['camelCase', 'PascalCase'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'parameter',
        'format': ['camelCase']
      },
      {
        'selector': 'typeParameter',
        'format': ['PascalCase'],
        'prefix': ['T', 'U', 'K', 'P', 'E']
      }
    ],

    /**
     * テンプレートリテラル式は文字列型を用いる
     *
     * @description "A"型などが文字列型と認識されないので、ESLintの設定をオフにする
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
     */
    '@typescript-eslint/restrict-template-expressions': 'off'
  },
};
