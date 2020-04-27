import * as actions from './actions'
import mutations from './mutations'

const state = {
  threads: [
    {
      _id: '5e81f0d1c63ec44131076ae5',
      categories: [
        'Discussions'
      ],
      created: '2020-03-30T13:14:57.150Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-30T13:14:57.158Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test---------'
      },
    {
      _id: '5e81f067fe35f93f479e91bb',
      categories: [
        'Discussions'
      ],
      created: '2020-03-30T13:13:11.548Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-30T13:13:11.556Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test--------'
    },
    {
      _id: '5e80a81580642f062002c6d5',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:52:21.984Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-30T13:11:43.044Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test-------'
    },
    {
      _id: '5e80a800354ecf0468aa56b4',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:52:00.182Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-29T13:52:00.182Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test------'
    },
    {
      _id: '5e80a7e48da3bf02e06a2822',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:51:32.433Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-29T13:51:32.433Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test-----'
    },
    {
      _id: '5e80a66b23a1137b5f1ec5d5',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:45:15.305Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-29T13:45:15.305Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test----'
    },
    {
      _id: '5e80a65f23a1137b5f1ec5d3',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:45:03.742Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-29T13:45:03.742Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test---'
    },
    {
      _id: '5e80a460e7e32c7575068a6f',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:36:32.964Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-29T13:36:32.964Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test--'
    },
    {
      _id: '5e80a428ab6f7872843833a2',
      categories: [
        'Discussions'
      ],
      created: '2020-03-29T13:35:36.185Z',
      last_comment_by: 'cham',
      last_comment_time: '2020-03-29T13:35:36.185Z',
      name: 'Test',
      nsfw: false,
      numcomments: 1,
      postedby: 'cham',
      urlname: 'test-'
    },
    {
      _id: '5527f9d955d829cb690007c3',
      categories: [
        'Discussions'
      ],
      created: '2015-04-10T16:27:05.001Z',
      last_comment_by: 'Trunks',
      last_comment_time: '2018-09-22T10:12:47.824Z',
      name: 'Apple innovation',
      nsfw: false,
      numcomments: 502,
      postedby: 'liberal',
      urlname: 'Apple-innovation'
    },
    {
      _id: '5ba5ce77ba9c31ea430002a4',
      categories: [
        'Projects'
      ],
      created: '2018-09-22T05:09:11.971Z',
      last_comment_by: 'Dan',
      last_comment_time: '2018-09-22T09:55:01.190Z',
      name: 'A story three words at a time',
      nsfw: false,
      numcomments: 5,
      postedby: 'omaryak',
      urlname: 'A-story-three-words-at-a-time'
    },
    {
      _id: '5ba4e1e47ba27ebf0b00056b',
      categories: [
        'Meaningless'
      ],
      created: '2018-09-21T12:19:48.841Z',
      last_comment_by: 'stenzor',
      last_comment_time: '2018-09-22T09:45:18.104Z',
      name: 'Tiny Phones Club',
      nsfw: false,
      numcomments: 12,
      postedby: 'Robot House',
      urlname: 'Tiny-Phones-Club'
    },
    {
      _id: '54a41943f0bd194749fe6d49',
      categories: [
        'Discussions'
      ],
      created: '2012-01-30T14:39:58.000Z',
      last_comment_by: 'rowlification',
      last_comment_time: '2018-09-22T09:33:11.411Z',
      name: 'screen printing/silkscreen [printmaking]',
      nsfw: false,
      numcomments: 83,
      postedby: 'virtualnao',
      urlname: 'screen-printing-silkscreen--printmaking-'
    },
    {
      _id: '54a41946f0bd194749fe7638',
      categories: [
        'Discussions'
      ],
      created: '2011-12-28T23:48:47.000Z',
      last_comment_by: 'harty',
      last_comment_time: '2018-09-22T07:55:19.329Z',
      name: 'the modest mouse nostalgia thread',
      nsfw: false,
      numcomments: 53,
      postedby: 'crux',
      urlname: 'the-modest-mouse-nostalgia-thread'
    },
    {
      _id: '54a4193ff0bd194749fe5e05',
      categories: [
        'Meaningless'
      ],
      created: '2011-10-25T06:24:19.000Z',
      last_comment_by: 'rowlification',
      last_comment_time: '2018-09-22T06:40:49.357Z',
      name: 'Im bored, lets count to a million',
      nsfw: false,
      numcomments: 2607,
      postedby: 'ISBN',
      urlname: 'Im-bored--lets-count-to-a-million'
    },
    {
      _id: '54a4193ff0bd194749fe5dc9',
      categories: [
        'Meaningless'
      ],
      created: '2011-11-28T22:13:27.000Z',
      last_comment_by: 'arronbc',
      last_comment_time: '2018-09-22T06:26:02.599Z',
      name: 'word association',
      nsfw: false,
      numcomments: 13180,
      postedby: 'nutters',
      urlname: 'word-association'
    },
    {
      _id: '54a41944f0bd194749fe700c',
      categories: [
        'Discussions'
      ],
      created: '2014-04-18T20:54:10.000Z',
      last_comment_by: 'zack',
      last_comment_time: '2018-09-22T05:30:00.839Z',
      name: 'YaySeattle',
      nsfw: false,
      numcomments: 106,
      postedby: 'tinyparachute',
      urlname: 'YaySeattle'
    },
    {
      _id: '5b6368c9252245fe210000fa',
      categories: [
        'Discussions'
      ],
      created: '2018-08-02T20:25:45.194Z',
      last_comment_by: 'Cartyisme',
      last_comment_time: '2018-09-22T05:01:29.643Z',
      name: 'Venom',
      nsfw: false,
      numcomments: 25,
      postedby: 'cincinnati',
      urlname: 'Venom'
    },
    {
      _id: '54a41940f0bd194749fe6062',
      categories: [
        'Discussions'
      ],
      created: '2013-01-10T21:30:26.000Z',
      last_comment_by: 'Dan',
      last_comment_time: '2018-09-22T04:58:44.199Z',
      name: 'GUNS GUNS GUNS',
      nsfw: false,
      numcomments: 578,
      postedby: 'textual',
      urlname: 'GUNS-GUNS-GUNS'
    },
    {
      _id: '54a41940f0bd194749fe61e1',
      categories: [
        'Advice'
      ],
      created: '2011-11-17T01:23:23.000Z',
      last_comment_by: 'ckuf',
      last_comment_time: '2018-09-22T04:18:26.579Z',
      name: 'Someone explain to me why twitter isn\'t worthless',
      nsfw: false,
      numcomments: 351,
      postedby: 'friction',
      urlname: 'Someone-explain-to-me-why-twitter-isn-t-worthless'
    },
    {
      _id: '5ba4f036c3c0e6420d000509',
      categories: [
        'Meaningless'
      ],
      created: '2018-09-21T13:20:54.896Z',
      last_comment_by: 'adem',
      last_comment_time: '2018-09-22T03:41:44.664Z',
      name: 'if you\'re a sneaker head do you buy shoes that aren\'t your size?',
      nsfw: false,
      numcomments: 19,
      postedby: 'EvanC',
      urlname: 'if-you-re-a-sneaker-head-do-you-buy-shoes-that-aren-t-your-size-'
    },
    {
      _id: '5a60cbec53378d6d22000003',
      categories: [
        'Discussions'
      ],
      created: '2018-01-18T16:31:40.419Z',
      last_comment_by: 'nik',
      last_comment_time: '2018-09-22T03:00:13.999Z',
      name: 'Jordan Peterson C4 interview',
      nsfw: false,
      numcomments: 1406,
      postedby: 'cham',
      urlname: 'Jordan-Peterson-C4-interview'
    },
    {
      _id: '54a4194df0bd194749fe9309',
      categories: [
        'Meaningless'
      ],
      created: '2013-06-09T18:03:11.000Z',
      last_comment_by: 'nik',
      last_comment_time: '2018-09-22T02:32:42.760Z',
      name: 'Alex Jones',
      nsfw: false,
      numcomments: 224,
      postedby: 'Vaskerville',
      urlname: 'Alex-Jones'
    },
    {
      _id: '54a41940f0bd194749fe6017',
      categories: [
        'Discussions'
      ],
      created: '2013-09-19T17:57:21.000Z',
      last_comment_by: 'sock',
      last_comment_time: '2018-09-22T00:18:27.613Z',
      name: 'why work?',
      nsfw: false,
      numcomments: 1774,
      postedby: 'sock',
      urlname: 'why-work-'
    },
    {
      _id: '54a41944f0bd194749fe712e',
      categories: [
        'Discussions'
      ],
      created: '2012-01-17T22:58:58.000Z',
      last_comment_by: 'owen',
      last_comment_time: '2018-09-21T23:25:04.961Z',
      name: 'The Making of Playstation',
      nsfw: false,
      numcomments: 92,
      postedby: 'Sephirot',
      urlname: 'The-Making-of-Playstation'
    },
    {
      _id: '54a41945f0bd194749fe71b6',
      categories: [
        'Discussions'
      ],
      created: '2012-07-20T16:27:41.000Z',
      last_comment_by: 'owen',
      last_comment_time: '2018-09-21T23:22:55.375Z',
      name: 'ITT we post non-ugly WordPress themes',
      nsfw: false,
      numcomments: 122,
      postedby: 'millions of people',
      urlname: 'ITT-we-post-non-ugly-WordPress-themes'
    },
    {
      _id: '5ba53e67d5e0d5b916000510',
      categories: [
        'Meaningless'
      ],
      created: '2018-09-21T18:54:31.086Z',
      last_comment_by: 'owen',
      last_comment_time: '2018-09-21T23:21:56.186Z',
      name: 'Have you guys seen the YH subreddit?',
      nsfw: false,
      numcomments: 4,
      postedby: 'nik',
      urlname: 'Have-you-guys-seen-the-YH-subreddit-'
    },
    {
      _id: '54a4195df0bd194749fecdff',
      categories: [
        'Discussions'
      ],
      created: '2013-09-25T20:45:07.000Z',
      last_comment_by: 'owen',
      last_comment_time: '2018-09-21T23:19:37.194Z',
      name: 'YHNT - Apple App Store Questions Answered',
      nsfw: false,
      numcomments: 5,
      postedby: 'elultimoheroe',
      urlname: 'YHNT--Apple-App-Store-Questions-Answered'
    },
    {
      _id: '54a41948f0bd194749fe7f60',
      categories: [
        'Meaningless'
      ],
      created: '2014-08-24T21:46:05.000Z',
      last_comment_by: 'textual',
      last_comment_time: '2018-09-21T22:31:48.628Z',
      name: 'TV Show - Bojack Horseman [Netflix]',
      nsfw: false,
      numcomments: 55,
      postedby: 'tc',
      urlname: 'TV-Show--Bojack-Horseman--Netflix-'
    },
    {
      _id: '5b98802fd5e0d5b91600049f',
      categories: [
        'Discussions'
      ],
      created: '2018-09-12T02:55:43.730Z',
      last_comment_by: 'Llyod',
      last_comment_time: '2018-09-21T22:17:19.378Z',
      name: 'konik artifact',
      nsfw: false,
      numcomments: 22,
      postedby: 'Llyod',
      urlname: 'konik-artifact'
    },
    {
      _id: '54a4193ff0bd194749fe5e1f',
      categories: [
        'Discussions'
      ],
      created: '2011-11-26T15:20:51.000Z',
      last_comment_by: 'businessmanbob',
      last_comment_time: '2018-09-21T22:10:12.671Z',
      name: 'New Movie Trailers',
      nsfw: false,
      numcomments: 1674,
      postedby: 'Paco',
      urlname: 'New-Movie-Trailers'
    },
    {
      _id: '5b915d7909c1462048000ea4',
      categories: [
        'Discussions'
      ],
      created: '2018-09-06T17:01:45.273Z',
      last_comment_by: 'foxmouth',
      last_comment_time: '2018-09-21T22:06:32.537Z',
      name: 'YH Names to Workspaces 2018',
      nsfw: false,
      numcomments: 15,
      postedby: 'stylesdavis',
      urlname: 'YH-Names-to-Workspaces-2018'
    },
    {
      _id: '54a41941f0bd194749fe64f2',
      categories: [
        'Discussions'
      ],
      created: '2013-04-05T22:19:25.000Z',
      last_comment_by: 'nik',
      last_comment_time: '2018-09-21T21:51:12.429Z',
      name: 'PC Building thread',
      nsfw: false,
      numcomments: 158,
      postedby: 'culthero',
      urlname: 'PC-Building-thread'
    },
    {
      _id: '56ad70a953231a6e1b000166',
      categories: [
        'Discussions'
      ],
      created: '2016-01-31T02:25:45.679Z',
      last_comment_by: 'Dan',
      last_comment_time: '2018-09-21T21:49:26.756Z',
      name: 'What are you playing?',
      nsfw: false,
      numcomments: 205,
      postedby: 'adem',
      urlname: 'What-are-you-playing-'
    },
    {
      _id: '54a41956f0bd194749feb2a7',
      categories: [
        'Meaningless'
      ],
      created: '2014-05-24T07:52:30.000Z',
      last_comment_by: 'nik',
      last_comment_time: '2018-09-21T20:53:56.988Z',
      name: 'hey nik',
      nsfw: false,
      numcomments: 33,
      postedby: 'Kibzter',
      urlname: 'hey-nik'
    },
    {
      _id: '54a4193ff0bd194749fe5e63',
      categories: [
        'Discussions'
      ],
      created: '2011-11-17T21:38:10.000Z',
      last_comment_by: 'vidiot',
      last_comment_time: '2018-09-21T20:42:18.306Z',
      name: 'YH Names to Cameras',
      nsfw: false,
      numcomments: 824,
      postedby: 'cog',
      urlname: 'YH-Names-to-Cameras'
    },
    {
      _id: '54a41942f0bd194749fe691a',
      categories: [
        'Discussions'
      ],
      created: '2012-07-03T19:01:18.000Z',
      last_comment_by: 'foxmouth',
      last_comment_time: '2018-09-21T20:42:16.864Z',
      name: 'Movies in frames',
      nsfw: true,
      numcomments: 112,
      postedby: 'foxmouth',
      urlname: 'Movies-in-frames'
    },
    {
      _id: '5911dba2401ed5ec5000015e',
      categories: [
        'Discussions'
      ],
      created: '2017-05-09T15:09:22.337Z',
      last_comment_by: 'k3v0',
      last_comment_time: '2018-09-21T20:21:41.493Z',
      name: 'getting wifi to my detached garage',
      nsfw: false,
      numcomments: 71,
      postedby: 'k3v0',
      urlname: 'getting-wifi-to-my-detached-garage'
    },
    {
      _id: '5b8ecbb9af32481c2a0007e5',
      categories: [
        'Discussions'
      ],
      created: '2018-09-04T18:15:21.607Z',
      last_comment_by: 'textual',
      last_comment_time: '2018-09-21T19:46:47.222Z',
      name: 'Motorcycles 2018',
      nsfw: false,
      numcomments: 61,
      postedby: 'adamhas',
      urlname: 'Motorcycles-2018'
    },
    {
      _id: '5a7b7ebfd6ffe37322000176',
      categories: [
        'Discussions'
      ],
      created: '2018-02-07T22:33:35.017Z',
      last_comment_by: 'speedy',
      last_comment_time: '2018-09-21T18:51:51.629Z',
      name: 'Dogs: Our friends, past and present',
      nsfw: false,
      numcomments: 24,
      postedby: 'mookie',
      urlname: 'Dogs--Our-friends--past-and-present'
    },
    {
      _id: '54a41951f0bd194749fe9fd0',
      categories: [
        'Meaningless'
      ],
      created: '2013-07-20T02:09:00.000Z',
      last_comment_by: 'Llyod',
      last_comment_time: '2018-09-21T17:47:19.139Z',
      name: 'The Family Guy meets The Simpsons Episode',
      nsfw: false,
      numcomments: 21,
      postedby: 'trigger',
      urlname: 'The-Family-Guy-meets-The-Simpsons-Episode'
    },
    {
      _id: '54a4193ff0bd194749fe5f56',
      categories: [
        'Discussions'
      ],
      created: '2011-10-25T15:33:35.000Z',
      last_comment_by: 'editor',
      last_comment_time: '2018-09-21T16:44:53.568Z',
      name: 'The Call of Duty thread. [COD, MW2, MW3, WaW, BO]',
      nsfw: false,
      numcomments: 454,
      postedby: 'Night Hoss',
      urlname: 'The-Call-of-Duty-thread---COD--MW2--MW3--WaW--BO-'
    },
    {
      _id: '54a4193ff0bd194749fe5eb7',
      categories: [
        'Discussions'
      ],
      created: '2011-12-14T14:41:32.000Z',
      last_comment_by: 'aud',
      last_comment_time: '2018-09-21T14:51:48.902Z',
      name: 'I quit my job!',
      nsfw: false,
      numcomments: 1111,
      postedby: 'Haley',
      urlname: 'I-quit-my-job-'
    },
    {
      _id: '54a4193ff0bd194749fe5dd7',
      categories: [
        'Discussions'
      ],
      created: '2011-10-30T00:36:20.000Z',
      last_comment_by: 'mishrock',
      last_comment_time: '2018-09-21T14:36:52.797Z',
      name: 'Movies seen over the weekend',
      nsfw: false,
      numcomments: 5343,
      postedby: 'Migrationer',
      urlname: 'Movies-seen-over-the-weekend'
    },
    {
      _id: '5831ecba7265de5d1f000011',
      categories: [
        'Discussions'
      ],
      created: '2016-11-20T18:34:34.447Z',
      last_comment_by: 'sock',
      last_comment_time: '2018-09-21T14:26:59.411Z',
      name: 'Trump',
      nsfw: false,
      numcomments: 7459,
      postedby: 'warped',
      urlname: 'Trump'
    },
    {
      _id: '54a4193ff0bd194749fe5dc6',
      categories: [
        'Discussions'
      ],
      created: '2011-10-23T09:15:22.000Z',
      last_comment_by: 'hexica',
      last_comment_time: '2018-09-21T12:14:40.234Z',
      name: 'YayUK V2.8.7 JEREMY KYLE',
      nsfw: true,
      numcomments: 65517,
      postedby: 'morgster',
      urlname: 'YayUK-V2-8-7-JEREMY-KYLE'
    },
    {
      _id: '58a21cdfae7e6e7f670000cf',
      categories: [
        'Discussions'
      ],
      created: '2017-02-13T20:53:51.349Z',
      last_comment_by: 'Dan',
      last_comment_time: '2018-09-21T09:21:16.081Z',
      name: 'Nintendo Switch',
      nsfw: false,
      numcomments: 771,
      postedby: 'owen',
      urlname: 'Nintendo-Switch'
    },
    {
      _id: '54a4193ff0bd194749fe5df8',
      categories: [
        'Discussions'
      ],
      created: '2011-10-26T17:01:02.000Z',
      last_comment_by: 'filippomu',
      last_comment_time: '2018-09-21T07:38:21.319Z',
      name: 'what i am listening to RIGHT THIS SECOND...',
      nsfw: false,
      numcomments: 3455,
      postedby: 'dre day',
      urlname: 'what-i-am-listening-to-RIGHT-THIS-SECOND---'
    },
    {
      _id: '5576eb8bf4971be23800014a',
      categories: [
        'Meaningless'
      ],
      created: '2015-06-09T13:35:07.355Z',
      last_comment_by: 'orel',
      last_comment_time: '2018-09-21T07:38:11.318Z',
      name: 'Real Talk Thread',
      nsfw: false,
      numcomments: 176,
      postedby: 'coquette',
      urlname: 'Real-Talk-Thread'
    },
    {
      _id: '558efcc6f4971be23800039b',
      categories: [
        'Discussions'
      ],
      created: '2015-06-27T19:43:02.055Z',
      last_comment_by: 'strawhatash',
      last_comment_time: '2018-09-21T06:32:28.108Z',
      name: 'only big questions in this thread',
      nsfw: false,
      numcomments: 1996,
      postedby: 'Llyod',
      urlname: 'only-big-questions-in-this-thread'
    }
  ]
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
