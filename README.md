## Lights!

This project is meant to be a light experiment running in your browser!

Planned Features:

- Audio visual feature where lights react to music
- Playground for playing with light [Inspired by Lusion Labs](https://akari.lusion.co/#home)
- Many more cool things you can do with light

## Technical

The basic idea is that from each pixel you shoot rays and if it hits something you accumulate color. Of course this is sped up with clever algorithms (Jump Flooding Algorithm, Radiance Cascades). The current state of the code is a very lightweight implementation of the [Radiance Cascades](https://jason.today/rc) blog post, with some fixes.


## Showcase

Using JFA + naive ray marching + (blue noise + bilateral filter) + fsr upscaling* (not yet implemented):

https://github.com/user-attachments/assets/504476ca-20a2-43fc-b8cd-25775eadcc38

Lyrics (same as above + lrclib.net + three-msdf-text-utils):

https://github.com/user-attachments/assets/b8725f49-4634-4391-911b-90c8e33ae27c


Using radiance cascades (although I'm unsure how faithful this is to the actual algorithm, needs research):

https://github.com/user-attachments/assets/695ad021-ca03-4f48-a944-330444764081


## Todos:

- Switch to webgl2 glsl
- ~~Cleanup/structure code~~ -> ~~Better but still needs cleaning but I need to adopt a way to transfer data between ui and the backend. Basically eliminate tight coupling -> Done to some extent?~~
- ~~Start adding audio visual support using canvas textures / add interesting things, play with light~~ -> Progress but never done
- Completely document radiance cascades and attempt to fix problems with radiance cascades
- ~~Research how to make this runable on an average device~~ -> Solved by downscaling, filtering and upscaling, still can be improved 
- Figure out dpr shenanigans and proper scaling based on which platform the user is on



## License & Attribution
Parts (actually mostly as of now) of this project are based on code from [Radiance Cascades](https://jason.today/rc) ([by  Jason McGhee](https://github.com/jasonjmcghee)),  
used under the MIT License.
