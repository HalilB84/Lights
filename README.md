## Lights!


This project is meant to be a light experiment running in your browser!

## Technical

2D global illumination via Radiance Cascades. The current state of the code is a mix of [Jason's RC](https://jason.today/rc) article, [Yaazarai's RC](https://mini.gmshaders.com/p/radiance-cascades2) raticle, and the [Fundamentals of Radiance Cascades](https://m4xc.dev/articles/fundamental-rc/) article. On top of that there are multiple modes where you can play with light.

RC related rendering happens at half the size of the base canvas using 2x/2x scaling/pre averaged with 4 rays per pixel. When Bilinear fix is on, 16 rays per pixel are cast that fixes the ringing artifact. To reduce pixelation objects are rendered in full res on top of their half res ones. To smooth out noise and artificats there is a bilateral filter pass at the end. Raymarching is accelerated with a DF produced with JFA. 

The wallpaper engine counterpart is of the program is on the lights-WE branch

## Showcase

Using Radiance Cascades:

(rework yt)

Using naive ray marching + blue noise + bilateral filter:

(rework yt)

## Todos:

- ~~Switch to webgl2 glsl~~
- ~~Cleanup/structure code~~ -> ~~Better but still needs cleaning but I need to adopt a way to transfer data between ui and the backend. Basically eliminate tight coupling -> Done to some extent?~~ -> ~~consider making state its own file~~ -> More work?
- ~~Start adding audio visual support using canvas textures / add interesting things, play with light~~ -> ~~Progress but never done~~ -> progress (the code is at a good state to just mass create experiences now)
- ~~Completely document radiance cascades and attempt to fix problems with radiance cascades~~ -> ~~Still not fully fixed but better~~ -> ~~Implement and comment optional Bilinear fix~~
- ~~Research how to make this runable on an average device~~ -> ~~Solved by downscaling, filtering and upscaling, still can be improved~~ -> ~~calculate cascades between two passes, looks no different and finally realtime on mobile!~~
- ~~Figure out dpr shenanigans and proper scaling based on which platform the user is on~~
- Look into holographic radiance cascades
- ~~Switch to TypeScript as a learning experience because it looks way better~~ -> Convert to tailwind css as a learning experience
- Hall of tiny problems that don't really matter but I can't live not knowing why: 1. Text edge problems troika 2.css select text not center positioning 3. how exactly ray marching resolves when it lands and gets pulled 4. colorspace

Planned Features:

- Audio visual feature where lights react to music -> on hold because not sure how it will work
- Playground for playing with light [Inspired by Lusion Labs](https://akari.lusion.co/#home)
- Many more cool things you can do with light

## License & Attribution
Parts of this project are based on code from [Radiance Cascades](https://jason.today/rc) ([by  Jason McGhee](https://github.com/jasonjmcghee)), used under the MIT License.

The Radiance Cascade implementation is based on [GMShaders-Radiance-Cascades](https://github.com/Yaazarai/GMShaders-Radiance-Cascades) ([by Yaazarai](https://github.com/Yaazarai))