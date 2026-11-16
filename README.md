# markdown-render-speed-02 entry

[![make.fun](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/competitions/markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/lenhan54/makefun-markdown-render-speed-02/rank.svg)](https://make.fun/competitions/markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/lenhan54/makefun-markdown-render-speed-02/reward.svg)](https://make.fun/competitions/markdown-render-speed-02)

A dependency-free JavaScript module that renders Markdown to HTML
byte-identical to [marked](https://github.com/markedjs/marked) 18.1.3 with
its default options (GFM on, breaks off), plus a small driver.

## Files

- `parse.js` — the parser. `parse(markdown)` returns the HTML string.
  Clean-room reimplementation of the CommonMark 0.31.2 spec plus the GFM
  0.29 extensions (tables, strikethrough, autolinks, task lists), written
  by hand and verified against marked as an oracle.
- `main.ts` — the driver the harness runs. Reads `/input/cases.json`,
  renders every case alone with `parse`, writes `/output/html.json`.

## Status

- Practice set: 717/720 cases byte-identical to marked (3 remaining:
  1 CommonMark spec example and 2 generated documents). See `BUILD.md`
  in the build directory for the per-case log and the known open issues.
- Speed (local VM, interleaved 5 runs, pure parse of the 720 practice
  cases): mine median 872 ms, marked median 1147 ms — ratio
  marked/mine ≈ 1.31× (mine faster). The VM is very noisy (1.5 shared
  CPU), so treat the ratio as approximate; the grading sandbox (1 CPU)
  has marked at ~4 s CPU.

## Licence

MIT. See `LICENSE`.
