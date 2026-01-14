## Lights!

This project is meant to be a light experiment running in your browser!

## Technical

The basic idea is that from each pixel you shoot rays and if it hits something you accumulate color. Of course this is sped up with clever algorithms (Jump Flooding Algorithm, Radiance Cascades). The current state of the code is a mix of the [Radiance Cascades](https://jason.today/rc) article, Yaazarai's RC implementation, and the [Fundamentals of Radiance Cascades](https://m4xc.dev/articles/fundamental-rc/) article. On top of that there are multiple modes where you can play with light.  


## Showcase

Using Radiance Cascades (pre averaged, 2x/4x scaling) (credits: [ Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends) ](https://www.youtube.com/watch?v=D9G1VOjN_84)):

https://github.com/user-attachments/assets/e264af89-6ed3-499f-ad51-b51f78119f40

Using naive ray marching + blue noise + bilateral filter (credits: [@animeclips_edits](https://www.instagram.com/animeclips__edits/)):

https://github.com/user-attachments/assets/51e49c7a-dfaa-4357-9ad4-52e02dd73a94

Lyrics (same as above + lrclib.net + three-msdf-text-utils) (credits: Planet - The Neighbourhood):

https://github.com/user-attachments/assets/9b813066-decc-499d-bb85-567a3b426d8f

## Todos:

- ~~Switch to webgl2 glsl~~
- ~~Cleanup/structure code~~ -> ~~Better but still needs cleaning but I need to adopt a way to transfer data between ui and the backend. Basically eliminate tight coupling -> Done to some extent?~~ -> ~~consider making state its own file~~ -> More work?
- ~~Start adding audio visual support using canvas textures / add interesting things, play with light~~ -> ~~Progress but never done~~ -> progress (the code is at a good state to just mass create experiences now)
- ~~Completely document radiance cascades and attempt to fix problems with radiance cascades~~ -> ~~Still not fully fixed but better~~ -> ~~Implement and comment optional Bilinear fix~~
- ~~Research how to make this runable on an average device~~ -> ~~Solved by downscaling, filtering and upscaling, still can be improved~~ -> ~~calculate cascades between two passes, looks no different and finally realtime on mobile!~~
- ~~Figure out dpr shenanigans and proper scaling based on which platform the user is on~~
- Look into holographic radiance cascades
- ~~Switch to TypeScript as a learning experience because it looks way better~~ -> Convert to tailwind css as a learning experience
- Hall of tiny problems that don't really matter but I can't live not knowing why: 1. Text edges blending with body color? -> because of premultiplied alpha related 2. Mysterious way three msdf-text-utils handles wrapping and positioning 3. css select text not center positioning 4. how exactly ray marching resolves when it lands and gets pulled -> also what this means for extra range on rc 5. colorspace

Planned Features:

- Audio visual feature where lights react to music -> on hold because not sure how it will work
- Playground for playing with light [Inspired by Lusion Labs](https://akari.lusion.co/#home)
- Many more cool things you can do with light

## License & Attribution
Parts of this project are based on code from [Radiance Cascades](https://jason.today/rc) ([by  Jason McGhee](https://github.com/jasonjmcghee)), used under the MIT License.

The Radiance Cascade implementation is based on [GMShaders-Radiance-Cascades](https://github.com/Yaazarai/GMShaders-Radiance-Cascades) ([by Yaazarai](https://github.com/Yaazarai))


