# Introduction

Visit the [App](https://next-spotify-clone-sirowood.vercel.app/)

This project is a study case from [Antonio's Youtube video](https://youtu.be/2aeMRB8LL4o).

It is a great great video to learn and practice the skills including:

- Next.js 13
- TailwindCSS
- Supabase
- Stripe

I also found this project offers some good programming pattern for Full stack development for me to learn, such as:

- Folder and file structure
- Providers:
  - When to use
  - What's the function
- Customize Hooks:
  - What's the benefits
  - How it looks like
  - How to use it correctly
- 'use client' in the Next.js:
  - Why use it
  - When to use it

## After thoughts

### Tailwind CSS

In the whole project, Antonio codes all of the Tailwind CSS classNames directly inside each component, but in my previous projects, I always extract them into a different file, and import the the variables to use. This makes me start to think which way is better?

Perhaps there is no correct answer, and highly depends on the coder's style or the teams's rule. But I feel the Antonio's way has some advantages, for instance:

1. The component is more independent and reusable
2. CD more efficiently, worry-free the modification of a component' style

But I also has some concerns:

1. Does it increase the size of complied files? If so, how much? Does the cost worthy?
2. Does it makes the code of each component looks unclean?

### Types

The project has a types.ts file meanwhile has many types/interface defined inside component file. Is it a good idea? Won't it causes chaos in the future?

Perhaps the logic could be:

- Define type/interface inside component if it is just for the props of the component
- Define type/interface inside a file if it is ONLY used in the component itself
- Define type/interface in a separate file if it will be used in multiple components/files

### Components

It is a common sense to make component as small as possible in React, but how much small? Too small component will increase the whole project's files quantity.

I did some research online, and according to one [blog](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/), my thought is it depends on component's role, for example:

- Container components
  - The only job of container component is to handle data: provide, create or hold data for the children components.
  - It consists of presentational components as its children that consumes the data.
- Presentational components
  - The primary responsibility is to present the data on the UI.
  - They are stateless unless they need their own state for rendering the UI.
  - They do not alter the data taht they receive.

Seems in Antonio's code, there are some clear Container components and presentational components, but there are also some components play the roles both:

- Container components:
- Presentational components:
  - @/components/Box.tsx
  - @/components/Button.tsx
  - @/components/Input.tsx
  - @/components/Modal.tsx
  - @/components/PlayButton.tsx
  - @/components/SideBarItem.tsx
  - etc.
- Mixed components:

## TODO:

In order to have a full understanding of this project, I will need to:

1. Write comments for files, explain the purpose of the file or the purpose of the functions.
2. Sort out how the whole project works, like what happens when user visit the website?
3. Fix bugs if found any.
4. Add more features to the project, such as:
   - [ ] Delete uploaded song
   - [ ] Modify uploaded song
   - [ ] Make the Player Component contains more song information, such as the total length, current length
   - [ ] Add/Modify/Delete playlist
5. Stream the song instead of current way
