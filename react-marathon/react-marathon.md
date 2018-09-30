### Getting Started

This marathon is designed to reinforce the concepts from this week. You will be creating a fully fledged stateful React application.

Note that this is a very task-based marathon. Read the instructions aloud, and keep referring back to the data that has been provided for you.

### Setup

From your challenges directory, run the following:

```sh
$ et get react-marathon
$ cd react-marathon
$ yarn install
$ yarn start
```

## Instructions

It's time to create our very own song app with React. It should display two lists:
* a list of playlists that we can select
* a list of associated songs that we can select

By the end, our React application should look something like this:
![React Marathon Final](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-7.png)

Acceptance Criteria
* Clicking on song list item should trigger that item to be highlighted. The song that was previously selected should then become un-highlighted.
* Clicking on a playlist list item should also trigger that item to become highlighted, and the previously selected playlist should no longer be highlighted.
* Changing the selected playlist should also make the change the currently highlighted song to the first in that playlist's list of songs.

Now that we understand what our application should look like, lets get started!

If you go to <http://localhost:8080>, you should see a message saying "React Music Player".

![React Music Player Start Image](https://s3.amazonaws.com/horizon-production/images/react-marathon-start-image.png)

Take a moment to explore the code that has been provided. What has already been built for us? What stylesheets are being used? What JavaScript files have we already been given? We'll want to keep these in mind while building our application.

### Step 0.1 - Familiarizing with the code
`App.js` will be our top level component. It is up to you to decide on how you end up using it. It may be responsible for managing state, creating some of our synthetic event functions, and even rendering our other components.

Note the file `constants/data.js`. This is where the information we wish to render into a React app is held. In the future, our React applications will receive important data via a `fetch` request, but for now it will be given to us via this file. It will be paramount that we take a moment to understand this `data` object's structure.

Foundation has been loaded into our project, allowing us to add specific classes to our JSX elements for styling should we choose.

### Step 0.2 - Planning Your React Component Tree

As a team, identify the component structure you wish to follow for your React application.

Once completed, you should have a tree-like diagram representing the components in your application. Use this as a guideline for your development, but know that your final code may be slightly different!

By the end of your planning, you should be able to answer the following questions:
* What are the necessary components for this feature?
* What responsibility will each component have?
* What behaviors does each component need to have?

### Step 1

Let's setup the sections of our app, load in our external data, and style accordingly.

* Create `div` tags for the "Playlist" and "Songs" sections of your app that you think you will need. Ensure that the words **Playlists** and **Songs** are rendered on the screen in each section.

* Load in the `data` object from the `constants/data.js`. Be sure to test that the data has been loaded into `App.js` as expected.

* In order to further test that we have received the music data as intended, render the name of the first playlist in your "Playlists" section, and the name of the first song in your "Songs" section.

* Each section of the the app will take up a half of the page. Use the [Foundation Grid](http://foundation.zurb.com/sites/docs/grid.html) to achieve the desired visual effect.

By the end, your screen should look similar to the one below:
![React Marathon Step 1](https://s3.amazonaws.com/horizon-production/images/react-marathon-step-1.png)

### Step 2

Let's focus on our "Playlists" section first.

* Create  a `Playlist` component to house the data for the first playlist. This should effectively replace the playlist name you were already rendering on the screen.

By the end, your screen should look nearly the same as before, except now we are utilizing a react component to control a specific element of the UI.

### Step 3

We've rendered one playlist on the screen, but our application should be prepared to render numerous playlists as our love of music grows.

* Create a `PlaylistCollection` component that is responsible for creating and rendering each of our custom `Playlist` components.

The component should be able to dynamically rendering any number of `Playlist` components if it needs to. `PlaylistCollection` should use the data imported from the `data.js` file to render each playlist.

You should be making use of `.map` to help dynamically invoke and create `Playlist` components.

By the end, your screen should look similar to the one below:

![React Marathon Step 3](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-3.png)

### Step 4

Let's return to one of our acceptance criteria: "Clicking on a playlist list item should also trigger that item to become highlighted, and the previously selected playlist should no longer be highlighted."

Discuss as a team how you will implement the feature for this step. It is okay to start with one approach, and refactor later.

Things to keep in mind:
* A function will need to be defined to change some state that tracks which playlist is currently selected.
* Said function should be defined in the component that holds that state (as opposed to in the component where the event listener will be).
* You may need to pass this function down as `props` through to a lower order component, and finally to an event listener.
* This function will need to be passed to each `Playlist` component that is rendered.

A classname has been provided for you for styling.

```css
.selected {
  background-color: $yellow;
  width: 100%
}
```
By the end of this step, your app should respond to clicking on a given playlist element, such that one playlist is highlighted at a time:

![React Marathon Step 4](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-4.png)

### Step 5

Now on to the "Songs" section of the app.

* Create a `Song` component to house the data for the first song. This should replace the song name you were already rendering on the screen, but it should also render the artist alongside the song name separated by a `-`

By the end, your screen should look similar to the one below:

![React Marathon Step 5](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-5.png)

### Step 6

One song is not enough, let's render ALL OF THE SONGS!

* Create a `SongCollection` component that is responsible for creating and rendering each of our custom `Song` components.

The component should be able to dynamically rendering any number of `Song` components if it needs to. `SongCollection` should use the data imported from the `data.js` file to render each song.

You should be making use of `.map` to help dynamically invoke and create `Song` components.

By the end, your screen should look similar to the one below:

![React Marathon Step 6](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-6.png)

### Step 7

Our music app only really adds value if we can select a _song_ for playing. It's time to satisfy another one of the acceptance criteria: "Clicking on song list item should trigger that item to be highlighted. The song that was previously selected should then become un-highlighted."

You'll want to make the same considerations that you made for highlighting a selecting playlist.

**Note:** For the moment, changing a selected playlist should NOT also change a selected song. We'll get to that later.

By the end of this step, your app should respond to clicking on a given song element, such that one song is highlighted at a time:

![React Marathon Step 7](https://s3.amazonaws.com/horizon-production/images/react-marathon-plus-step-7.png)

You've done a fantastic job! The core requirements are done!

## Optional Steps

Here are a list of extra challenges you can work in if you have more time for practice.

### Step 8

A lot of our core functionality is in place, but the two sections of our app are currently almost entirely independent of one another. Let's update the application to **only show the songs for the currently selected playlist.**

This step assumes a few things about your music app is currently keeping track of which playlist is currently selected. However, because the selected playlist will now determine which songs are generated in your `SongCollection` component, **you will need to make sure that you are tracking the selected playlist in `App.js` e.g. `selectedPlaylistId`**

Tips:
* First, gather the list of song ids for the currently selected playlist, and save them to a variable e.g. `selectedPlaylistSongIds`. You'll want to re-evaluate `data.js` to complete this step.
* Iterate over all of the songs, and retrieve only those songs that also having a matching id in `selectedPlaylistSongIds`
* Pass the resulting array of song data to your `SongCollection` component for rendering!

By the end of this step, changing a selected Playlist should also change which songs are rendered on the screen.

### Step 9

Let's make sure that a song and playlist are always highlighted, with default a playlist and song.

* Without editing `data.js`, upon opening the app, the first playlist of the playlists in `data.js` should be selected and highlighted.
* Without editing `data.js`, upon opening the app, the first song _of the selected playlist_ should be selected and highlighted.

A user should be able to update their selected playlist and song as usual as well.

Once you have implemented the code from this last step, your song application is complete. EXCELLENT! :metal:
