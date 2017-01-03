import defaultLang from './lang';

let _defaultLang = angular.copy(defaultLang);

export default Object.assign(_defaultLang, {
  Install: '安装',
  Install_Description:'介绍如何搭建环境及快速上手。',
  Generate:'项目生成',
  Install_Generator:'安装生成器',
  Generate_Init:'使用ng-start-cli初始化，根据提示输入项目名称 ',
  Generate_Start:'切换至新建项目目录，输入gulp 运行项目。',
  Install_FancyUI: '安装 fancyui',
  Inject_Module: '注入模块',
  Example: '示例',
  Basic_Usage: '基础用法',
  Tutorial: '开发指南',
  Basic: '基础',
  Layout: '布局',
  Navigation: '导航',
  Data: '数据',
  Chat: '可视化',
  Effect: '效果',
  Badage_Description: '图标右上角的圆形徽标数字。',
  Badage_Description1: '一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。',
  MaxValue: '最大值',
  Message: '消息',
  Options: '配置项',
  Param: '参数',
  Description: '描述',
  Type: '类型',
  Optional: '可选值',
  DefaultValue: '默认值',
  Count_Description: '显示值, 为 0 时隐藏',
  Max_Description: '最大值，超过最大值会显示 max+',
  Dot_Description: '展示为小圆点',
  Project_file:'项目文件结构',
  GenerateModule:'生成组件',
  GenerateModuleDescription:'增加一个页面模块, 执行 gulp component 命令。',
  ParamName:'--name：确定没有重名的模块，会覆盖已有同名模块，大小写不敏感。',
  ParamParent:'--parent：可以通过该参数来改变生成的目录，基准目录是 client/app/components/。',
  Create:'创建',
  CreateDetail:'创建好的模板目录如下：',
  RouterSetting:'路由配置',
  RouterFile:"配置地址",
  RouterDesc:'统一配置，支持埋点，code splitting 等.',
  ProxySetting:'代理配置',
  ProxySettingDes:'为了方便本地调试和解决跨域问题, 在执行 gulp 启动调试时, 会启动代理服务器, 转发是可配置的, 见custom.env.config.js。',
  ApiFilter:'配置第一级目录，代表该目录要走代理。',
  TargetDomain:'目标API的host地址, 在调用后端接口时, 用的是相对路径, 接口路径是本地域名, 如: http://localhost:3000, 此项配置将localhost转发到targetDomain配置的域名(后端接口的域名), 并将cookie带过去.',
  Cookie:'那些需要识别用户的Api，往往通过cookie来识别，在这里设置cookie',
  Pack:'打包',
  PackDes:'运行gulp webpack命令, 将项目打包到custom.env.config.js中配置的distPath。',
  ButtonDes:'常用的操作按钮',
  Styles:'风格',
  Size:'尺寸',
  Icon:'带Icon的按钮',
  IconDes:'icon属性的值与bootstrap的glyphicon名称相同',
  Disable:'禁用状态',
  IconDes1:'包括200个来自 Glyphicon Halflings 的字体图标。',
  GridLayout:'栅格布局',
  StepsDes:'引导用户按照流程完成任务的分步导航条。',
  TableDes:'用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。',
  CustomTableDes:'可以自定义选择要显示的列。',
  IsCustomTable:'是否自定义表格',
  Operations:'每条数据的操作配置, 回调函数:action, 回调参数:当前行数据',
  TableData:'表格数据(接口返回的数据)',
  Event:'事件',
  EventName:'事件名称',
  TableEventDesc:'翻页后触发',
  TableEventParams:'翻页后的页码',
  FormDes:'由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。',
  PanelDes:'通用卡片容器',
  SwitchDes:'表示两种相互对立的状态间的切换，多用于触发「开/关」。',
  SwitchWorld:'带文字',
  SwitchEventDes:'开关状态发生变化时的回调函数',
  SwitchEventParam:'新状态的布尔值',
  ProgressDes:'用于展示操作进度，告知用户当前状态和预期。',
  ProgressLinear:'线形进度条',
  ProgressCircular:'环形进度条',
  ProgressType:'进度条类型',
  ProgressPercent:'百分比（必填）',
  ProgerssState:'进度条当前状态',
  ProgressWidth:'进度条的宽度，单位 px',
  ProgressCircularWidth:'环形进度条画布宽度（只在 type=circle 时可用）',
  InputDes:'通过鼠标或键盘，输入范围内的数值。',
  StepSetting:'设置步数',
  CurrentValue:'当前值',
  Disabled:'是否禁用',
  RateDes:'评分组件',
  WithColor:'区分颜色',
  WithText:'辅助文字',
  RateCount:'评分总值',
  RateColors:'icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色',
  LowThreshold:'低分和中等分数的界限值，值本身被划分在低分中。',
  HightThreshold:'高分和中等分数的界限值，值本身被划分在高分中',
  TextArray:'文字数组',
  DefaultCalendar:'默认时间窗',
  RangeCalendar:'范围时间窗',
  RangeCalendarDes:'会自动限制前者时间不能大于后者时间,后者时间不能小于前者时间',
  CalendarTypeDesc:'单个时间组件还是时间范围组件',
  SliderInputDesc:'滑动型输入器，展示当前值和可选范围。',
  PopConfirmDesc:'目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，交互形式更轻量。',
  PopConfirmUse:'此方法会返回Promise, 其中resolve表明用户点击了确认按钮; reject表明用户点击了取消按钮;',
  HintDesc:'悬浮出现在页面右上角，显示全局的通知提醒消息。',
  Component:'组件文档'
});