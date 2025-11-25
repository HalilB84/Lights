## Lights!

This project is meant to be a light experiment running in your browser!

Planned Features:

- Audio visual feature where lights react to music
- Playground for playing with light [Inspired by Lusion Labs](https://akari.lusion.co/#home)
- Many more cool things you can do with light

## Technical

The basic idea is that from each pixel you shoot rays and if it hits something you accumulate color. Of course this is sped up with clever algorithms (Jump Flooding Algorithm, Radiance Cascades). The current state of the code is a mix of the [Radiance Cascades](https://jason.today/rc) blog post and Yaazarai's RC implementation, with some fixes + a video player and a lyrics player.


## Showcase

Using Radiance Cascades (direction first, 4x scaling -> no noise but now there are artificats, however it looks considerably better than naive ray marching with noise) (credits: [ Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends) ](https://www.youtube.com/watch?v=D9G1VOjN_84)):

https://github.com/user-attachments/assets/0c577f64-2c95-40f3-8de5-27ef6a08529c

Using JFA + naive ray marching + (blue noise + bilateral filter) (credits: [@animeclips_edits](https://www.instagram.com/animeclips__edits/)):

https://github.com/user-attachments/assets/504476ca-20a2-43fc-b8cd-25775eadcc38

Lyrics (same as above + lrclib.net + three-msdf-text-utils) (credits: LIKE A ROCKSTAR - Chase Atlantic):

https://github.com/user-attachments/assets/b8725f49-4634-4391-911b-90c8e33ae27c



## Todos:

- ~~Switch to webgl2 glsl~~
- ~~Cleanup/structure code~~ -> ~~Better but still needs cleaning but I need to adopt a way to transfer data between ui and the backend. Basically eliminate tight coupling -> Done to some extent?~~ -> ~~consider making state its own file~~ -> More work?
- ~~Start adding audio visual support using canvas textures / add interesting things, play with light~~ -> Progress but never done
- ~~Completely document radiance cascades and attempt to fix problems with radiance cascades~~ -> Still not fully fixed but better
- ~~Research how to make this runable on an average device~~ -> Solved by downscaling, filtering and upscaling, still can be improved 
- Figure out dpr shenanigans and proper scaling based on which platform the user is on
- Look into holographic radiance cascades



## License & Attribution
Parts of this project are based on code from [Radiance Cascades](https://jason.today/rc) ([by  Jason McGhee](https://github.com/jasonjmcghee)), used under the MIT License.

At least as of now the Radiance Cascade implementation is based on [GMShaders-Radiance-Cascades](https://github.com/Yaazarai/GMShaders-Radiance-Cascades) ([by Yaazarai](https://github.com/Yaazarai))
