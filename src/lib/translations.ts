export const translations = {
  en: {
    app: {
      title: "EveryCompare",
      description: "Professional text comparison and diff analysis tool"
    },
    header: {
      new: "New",
      openLeft: "Open Left", 
      openRight: "Open Right",
      save: "Save"
    },
    toolbar: {
      lineNumbers: "Line Numbers",
      swap: "Swap",
      reset: "Reset",
      copyDiff: "Copy Diff",
      enableEdit: "Enable Right Edit",
      readOnly: "Lock Right Side",
      enableLeftEdit: "Enable Left Edit",
      leftReadOnly: "Lock Left Side",
      enableRightEdit: "Enable Right Edit",
      rightReadOnly: "Lock Right Side"
    },
    editor: {
      original: "Original",
      modified: "Modified"
    },
    languages: {
      javascript: "JavaScript",
      typescript: "TypeScript",
      python: "Python",
      java: "Java",
      csharp: "C#", 
      cpp: "C++",
      html: "HTML",
      css: "CSS",
      json: "JSON",
      markdown: "Markdown",
      plaintext: "Plain Text"
    },
    status: {
      ready: "Ready",
      language: "Language",
      editable: "Editable",
      readOnly: "Read-only",
      left: "Left",
      right: "Right",
      lines: "lines",
      chars: "chars"
    },
    toast: {
      leftReadOnlyWarning: "Left editor is locked. Click 'Enable Left Edit' to make changes.",
      rightReadOnlyWarning: "Right editor is locked. Click 'Enable Right Edit' to make changes."
    },
    productCompare: {
      title: "Product Comparison",
      searchPlaceholder: "Search products...",
      addToCompare: "Add to Compare",
      remove: "Remove",
      selectedForComparison: "Selected for comparison:",
      clearAll: "Clear All",
      compare: "Compare",
      backToSelection: "← Back to Selection",
      comparing: "Comparing",
      products: "products",
      specifications: "Specifications",
      different: "Different",
      searchResults: "Search results for",
      productsFound: "products found",
      noProductsFound: "No products found",
      browseCategories: "Browse Categories"
    }
  },
  zh: {
    app: {
      title: "EveryCompare",
      description: "专业的文本对比与差异分析工具"
    },
    header: {
      new: "新建",
      openLeft: "打开左侧",
      openRight: "打开右侧",
      save: "保存"
    },
    toolbar: {
      lineNumbers: "行号",
      swap: "交换",
      reset: "重置",
      copyDiff: "复制差异",
      enableEdit: "启用右侧编辑",
      readOnly: "锁定右侧",
      enableLeftEdit: "启用左侧编辑",
      leftReadOnly: "锁定左侧",
      enableRightEdit: "启用右侧编辑",
      rightReadOnly: "锁定右侧"
    },
    editor: {
      original: "原始版本",
      modified: "修改版本"
    },
    languages: {
      javascript: "JavaScript",
      typescript: "TypeScript",
      python: "Python", 
      java: "Java",
      csharp: "C#",
      cpp: "C++",
      html: "HTML",
      css: "CSS",
      json: "JSON",
      markdown: "Markdown",
      plaintext: "纯文本"
    },
    status: {
      ready: "就绪",
      language: "语言",
      editable: "可编辑",
      readOnly: "只读",
      left: "左侧",
      right: "右侧", 
      lines: "行",
      chars: "字符"
    },
    toast: {
      leftReadOnlyWarning: "左侧编辑器已锁定。点击'启用左侧编辑'按钮来进行修改。",
      rightReadOnlyWarning: "右侧编辑器已锁定。点击'启用右侧编辑'按钮来进行修改。"
    },
    productCompare: {
      title: "产品对比",
      searchPlaceholder: "搜索产品...",
      addToCompare: "加入对比",
      remove: "移除",
      selectedForComparison: "已选择对比:",
      clearAll: "清空全部",
      compare: "开始对比",
      backToSelection: "← 返回选择",
      comparing: "正在对比",
      products: "款产品",
      specifications: "规格参数",
      different: "不同",
      searchResults: "搜索结果",
      productsFound: "款产品",
      noProductsFound: "未找到产品",
      browseCategories: "浏览分类"
    }
  }
};

export type Language = 'en' | 'zh';
export type TranslationKey = keyof typeof translations.en;