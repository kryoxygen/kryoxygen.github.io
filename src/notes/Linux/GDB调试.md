### 常见调试命令参数

```shell 
$(gdb) help(h) # 查看命令帮助
$(gdb) run(r) # 继续运行程序
$(gdb) start # 运行程序，停在第一行执行语句
$(gdb) list(l) [nums]/函数名 # 查看源代码
$(gdb) set # 设置变量的值
$(gdb) next(n) # 单步调试，逐过程
$(gdb) step(s) # 单步调试，逐语句
$(gdb) backtrace(bt) # 查看函数的调用的栈帧和层级关系
$(gdb) frame(f) # 切换函数的栈帧
$(gdb) info(i) # 查看函数内部局部变量的值
$(gdb) finish # 结束当前函数，返回函数调用点
$(gdb) continue(c) # 继续执行
$(gdb) print(p) # 打印值及地址
$(gdb) quit(q) # 退出gdb

$(gdb) break [nums] # 在第nums行添加断点
$(gdb) info breakpoints # 查看当前设置的所有断点
$(gdb) display/undisplay [] # 显示或隐藏追踪变量的值
$(gdb) enable/disable breakpoints # 启用/禁用断点
$(gdb) x # 默认查看20个单元，每个单元4字节
$(gdb) run argv[1] argv[2] # 调试时命令行传参
```

