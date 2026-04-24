Implementations:
- https://github.com/Yaazarai/Volumetric-HRC (My implementation is based on this, thanks Yaazarai)
- https://github.com/entropylost/amitabha (One of the paper's author's reference implementation, way way more comprehensive magic rust code)
- https://github.com/folk-js/folkjs/blob/main/packages/labs/src/folk-holographic-rc.ts ([webgpu hrc](https://folkjs.org/demos/shaders/holographic-rc.html) and its extremely fast with light bounce support)
- There is a paper someone wrote in the discord group (on the #resources-rc channel) that break down the equations. It was pretty helpful
- These are all the ones I know but there are a lot more in the discord gc

Resources:
- Vanilla HRC: https://arxiv.org/pdf/2505.02041 (Original paper, very readable and will make understanding the alg easier)
- DDA alg: https://aaaa.sh/creatures/dda-algorithm-interactive/

Optimizations \ Features:
- optional per rgb transmittance cuz fps
- optional half probes in a plane as they go unused except in c0 and interp in c0  - gives around 2x boost
- non POT resolutions need work but this should be not too hard, I just need per cascade res and complete to the nearest POT - will harm fps

