import '@root/global.scss';

import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Card from '@components/Card';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Grid from '@components/Grid';
import Indent from '@components/Indent';
import ListItem from '@components/ListItem';
import Package from '@root/package.json';

export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;

  return {
    description,
    icons: {
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      icon: '/favicon-32x32.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://jonsamp.dev'),
    title,
    url: 'https://jonsamp.dev',
  };
}

export default async function Page() {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />
      <br />
      <Grid>
        <Avatar src="/avatar.jpg" target="_blank">
          <Indent>
            JON SAMP
            <br />
            Product + design + mgmt @{' '}
            <a href="https://expo.dev" target="_blank">
              expo.dev
            </a>
          </Indent>
        </Avatar>
      </Grid>
      <Grid>
        👋 Hi! I'm the head of product at Expo. I'm also a designer and an engineering manager. We're building be best way to write and deliver application code.
        <br />
        <br />
        Previously a front-end engineer at{' '}
        <a href="https://codecademy.com" target="_blank">
          Codecademy
        </a>
        . I love building quality user experiences with React and Expo. Below you'll find some of my side projects. You can also find me on{' '}
        <a href="https://github.com/jonsamp" target="_blank">
          GitHub
        </a>{' '}
        and{' '}
        <a href="https://bsky.app/profile/jonsamp.dev" target="_blank">
          BlueSky
        </a>
        . Thanks for stopping by!
      </Grid>
      <Grid>
        <Card title="APP" mode="left">
          <Avatar src="/projects/word-check/icon.png" style={{ borderRadius: '8px', alignItems: 'center', display: 'flex', justifyContent: 'center' }} target="_blank">
            <Indent>
              <strong>WORD CHECK</strong>
              <br />
              Verify if a word is valid in Scrabble.
            </Indent>
          </Avatar>
          <br />
          On a Sunday afternoon, I was playing Scrabble with my family. I challenged a word and found that all the websites that validate Scrabble words are hard to use. They don't use official tournament dictionaries, they suggest other valid words from the letters that you input, and they're filled with ads.
          <br />
          <br />
          After finding the official NASPA Word List and Collins Scrabble Words lists, I used React and Expo to create an app that can look up words instantly. Word Check is free with no ads and open source.
          <br />
          <br />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2%', marginBottom: '2ch' }}>
            <img src="/projects/word-check/valid-word-light.png" style={{ width: '18%' }} />
            <img src="/projects/word-check/invalid-word-light.png" style={{ width: '18%' }} />
            <img src="/projects/word-check/valid-word-dark.png" style={{ width: '18%' }} />
            <img src="/projects/word-check/dictionaries-dark.png" style={{ width: '18%' }} />
          </div>
          <a href="https://apps.apple.com/us/app/word-check-for-scrabble/id1489890340" target="_blank">
            <Button> Apple App Store</Button>
          </a>
          <a href="https://github.com/jonsamp/word-check" target="_blank">
            <Button theme="SECONDARY">GitHub</Button>
          </a>
        </Card>
      </Grid>
      <Grid>
        <Card title="APP" mode="left">
          <Avatar src="/projects/single-origin/icon.png" style={{ borderRadius: '8px', alignItems: 'center', display: 'flex', justifyContent: 'center' }} target="_blank">
            <Indent>
              <strong>SINGLE ORIGIN</strong>
              <br />
              Brew specialty coffee.
            </Indent>
          </Avatar>
          <br />
          Brewing pour over coffee is a ritual. It's a process that takes time and requires attention to detail. It also requires mental math and timing to pour water at the right intervals.
          <br />
          <br />
          FEATURES
          <ul>
            <ListItem>Pour in intervals as your coffee brews to get the perfect balance of sour, sweet, and bitter notes.</ListItem>
            <ListItem>Every pour-over includes recipes for iced versions with an in-recipe toggle.</ListItem>
            <ListItem>Get a notification to taste your coffee once it has cooled. Tapping the notification takes you straight to a quick rating card.</ListItem>
            <ListItem>Add tasting notes, an overall rating, and notes to each brew.</ListItem>
            <ListItem>Once you rate your brew, you'll see a suggestion of how to improve next time.</ListItem>
          </ul>
          <br />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '2%', marginBottom: '2ch' }}>
            <img src="/projects/single-origin/menu.png" style={{ width: '23.5%' }} />
            <img src="/projects/single-origin/setup.png" style={{ width: '23.5%' }} />
            <img src="/projects/single-origin/brewing.png" style={{ width: '23.5%' }} />
            <img src="/projects/single-origin/summary.png" style={{ width: '23.5%' }} />
          </div>
          <a href="https://apps.apple.com/us/app/single-origin-coffee-timer/id1480168613" target="_blank">
            <Button> Apple App Store</Button>
          </a>
        </Card>
      </Grid>
      <Grid>
        This site is built with components from{' '}
        <a href="https://github.com/internet-development/www-sacred/tree/main" target="_blank">
          SRCL
        </a>
        , crafted by{' '}
        <a href="https://bsky.app/profile/jim.bsky.social" target="_blank">
          wwwjim
        </a>
        .
      </Grid>
    </DefaultLayout>
  );
}
