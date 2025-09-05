## Lights!

This project is meant to be a light experiment running in your browser!

Planned Features:

- Audio visual feature where lights react to music
- Playground for playing with light [Inspired by Lusion Labs](https://akari.lusion.co/#home)
- Many more cool things you can do with light

## Technical

The basic idea is that from each pixel you shoot rays and if it hits something you accumulate color. Of course this is sped up with clever algorithms (Jump Flooding Algorithm, Radiance Cascades). The current state of the code is a very lightweight implementation of the [Radiance Cascades](https://jason.today/rc) blog post, with some fixes.


## Showcase

Using JFA + naive ray marching:
https://github.com/user-attachments/assets/de2ced26-d56f-4a54-aaef-abfe67d1cb15


Using radiance cascades (although I'm unsure how faithful this is to the actual algorithm, needs research):
https://github.com/user-attachments/assets/695ad021-ca03-4f48-a944-330444764081


## Todos:

- Switch to webgl2
- Cleanup/structure code
- Start adding audio visual support using canvas textures / add interesting things, play with light
- Completely document radiance cascades
- Attempt to fix problems with radiance cascades
- Research how to make this runable on an average device
- Use some sort of framework so I get a internship



## License & Attribution
Parts (actually mostly as of now) of this project are based on code from [Radiance Cascades](https://jason.today/rc) ([by  Jason McGhee](https://github.com/jasonjmcghee)),  
used under the MIT License.
