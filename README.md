## Lights!

This project is meant to be a light experiment running in your browser!

## Technical

2D global illumination via (Holographic) Radiance Cascades. On top of that there are multiple modes where you can play with light.

HRC related rendering happens at variable resolutions. More to come.

RC related rendering happens at half the size of the base canvas using 2x/2x scaling/pre averaged with 4 rays per pixel. When Bilinear fix is on, 16 rays per pixel are cast that fixes the ringing artifact. To reduce pixelation objects are rendered in full res on top of their half res ones. To smooth out noise and artificats there is a bilateral filter pass at the end. Raymarching is accelerated with a DF produced with JFA.

The wallpaper engine counterpart is of the program is on the lights-WE branch.

## Showcase

Using Holographic Radiance Cascades

(showcase)

(Old) Using Radiance Cascades:

(rework)

(Old) Using tracing:

(rework)

## Todos:

- ~~Cleanup/structure code~~ -> More work?
- ~~Look into holographic radiance cascades -> Implemented~~ -> Optimize and cleanup + look into webgpu
- ~~Switch to TypeScript as a learning experience because it looks way better~~ -> Convert to tailwind css as a learning experience
- Hall of tiny problems that don't really matter but I can't live not knowing why: 1. ~~Text edge problems troika~~ 2. colorspace -> solved (https://discourse.threejs.org/t/updates-to-color-management-in-three-js-r152/50791)

Planned Features:

- Audio visual feature where lights react to music.
- Playground for playing with light [Inspired by Lusion Labs](https://akari.lusion.co/#home).
- Many more cool things you can do with light.

## License & Attribution

The (Holographic) Radiance Cascade implementation is based on [Volumetric-HRC](https://github.com/Yaazarai/Volumetric-HRC) and [GMShaders-Radiance-Cascades](https://github.com/Yaazarai/GMShaders-Radiance-Cascades) [by Yaazarai](https://github.com/Yaazarai), used under the Unlicense.

Some old parts of this project are based on code from [Radiance Cascades](https://jason.today/rc) ([by Jason McGhee](https://github.com/jasonjmcghee)), used under the MIT License.
