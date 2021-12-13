import React from "react";
import { Typography, makeStyles, Container, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import data from "../../data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#282c34",
  },
  heading: {
    fontSize: "50px",
    fontWeight: 700,
  },
  body: {
    marginRight: "50px",
    marginLeft: "15px",
    marginTop: "15px",
    textAlign: "justify",
  },
}));

const pick = [
  {
    title: "Auction",
    description:
      "Items or services are sold either in front of an audience or online to the person who is prepared to pay the highest amount. Audience members place “bids” for each item or “lot,” with bids being managed by an auctioneer. Competitive bids are placed increasing in value, until each person has offered the maximum amount they want to for the lot, at which point the highest bidder has secured the item. This is great for non-profit fundraisers.",
  },
  {
    title: "Award ceremony",
    description:
      "Think the Oscars, the Emmys, or the Grammys. Of course, not all award ceremonies are quite as slick and glamorous, but they’re a wonderful way to recognize and reward the hard work of teams and individuals.",
  },
  {
    title: "Book reading",
    description:
      "Choose an author or particular book and host a virtual or in-person read-along, like Octavia Butler’s Slow Read does. Make sure to let attendees know to bring a copy of the book for themselves to read along with.",
  },
  {
    title: "Breakfast briefing",
    description:
      "A morning event format often used when the host has an announcement or launch to present. It’s great for those who want to reach a business audience, who would be unable to attend an event in office hours or after work, and is an ideal option for those who need online event ideas, as the format is easily adaptable to a virtual venue.",
  },
  {
    title: "Conference",
    description:
      "Conferences are made up of several sessions, often mixing up formats including keynotes, panels, breakouts, and roundtables and blending learning with networking. They can be either in-person or online like the Johnson Women in Technology conference.",
  },
  {
    title: "ConfEx",
    description:
      "A ConfEx is part conference, part exhibition. As you’d imagine, there’s a heavy emphasis on talks and learning, but with a large number of exhibitors offering smaller presentations, and unique opportunities for networking and connecting either in-person or online.",
  },
  {
    title: "Congress",
    description:
      "Congresses generally refer to formal meetings between politicians or government representatives. Many conferences also adopt the name of “congress” to sound more formal and important, too.",
  },
  {
    title: "Consumer show or fair",
    description:
      "These are usually big events full of vendors selling their products or services all linked by a specific theme. You can bring vendors to an online version, too, to market homeware, travel opportunities, or electronics — take inspiration from the Global Sources consumer shows.",
  },
  {
    title: "Convention",
    description:
      "This is another broad term that can sometimes mean a conference, a trade show, or, more commonly now, a virtual or in-person gathering of fans (i.e. a fandom)",
  },
  {
    title: "Debate",
    description:
      "Witnessing talented, passionate debaters is an event that can make a huge impression. In fact, virtual debates, like those hosted by Bright Green, can influence elections, lend credibility to causes, and get spectators questioning their original assumptions.",
  },
  {
    title: "Endurance race",
    description:
      "Endurance events are normally individual feats of endurance where you race against yourself to complete the distance. Like races, the most common forms involve running, cycling, and swimming (or all three). But they could involve dancing in your house for 24 hours.",
  },
  {
    title: "Exhibition or trade show",
    description:
      "Trade shows are similar to consumer fairs, but are normally restricted to professionals and not open to the public. They focus on selling high-value B2B goods or services and can easily be held online.",
  },
  {
    title: "Masquerade",
    description:
      "Most common around Halloween, masquerade parties are a great excuse to get dressed up, either online at home or, if venues are open and safe, out and about in person. Revel with others in equally outrageous, amusing, and esoteric clothing.",
  },
  {
    title: "Fandom gathering",
    description:
      "Held virtually or in person, this type of event focuses on fans of a particular part of popular culture — usually referring to subcultures such as science fiction, anime, and gaming or cult TV series.",
  },
  {
    title: "Fashion show",
    description:
      "The buzz and theater of a runway at one of the major fashion weeks are hard to replicate, but fashion shows work well online, too. Plus, they’re a fun way to raise money for charity.",
  },
  {
    title: "Festival",
    description:
      "Festivals are often music-focused, but can be on any topic. An organized concert series, like the one from the Contemporary A Capella Society, or screenings or plays, are usually hosted at a single venue over several days. While gathering in large groups of people in person may be difficult with venues closed, many creators are moving their festivals online.",
  },
  {
    title: "Flash",
    description:
      "Flash events may be organized months in advance, but they are promoted merely days before the event. These types of events are great if you have a large following or a high demand for your event. The sudden release of news of your event is sure to trigger impulse buying.",
  },
  {
    title: "Food and drink",
    description:
      "Food and drink events can be as varied as food and drink itself. In-person events typically have a large variety of stalls and vendors selling their goods. But with many venues closed, creators like Olive & Atlas Travel Design have transitioned their events online. They often involve obtaining ingredients to cook along with, and are a great way to sample a lot of variety and expand your palate.",
  },
  {
    title: "Forum",
    description:
      "Historically, “the Forum” was a Roman center of public life where citizens would gather. In the context of events, a forum is usually a great format for debate and airing of opinions and so associated with legal and political proceedings.",
  },
  {
    title: "Gaming",
    description:
      "Whether it’s gathering social gamers or attracting gamers that play for cash prizes as a sport, gaming is a big industry to penetrate. These types of events can help you target a niche audience.",
  },
  {
    title: "Gig",
    description:
      "Wikipedia explains this one best: “Gig is slang for a musical engagement in which musicians are hired. Originally coined in the 1920s by jazz musicians, the term, short for the word engagement, now refers to any aspect of performing such as assisting with performance and attending a musical performance.” In the 2020s, you can find them livestreamed online, too.",
  },
  {
    title: "Hackathon",
    description:
      "When you bring together programmers, designers, and other digital professionals and ask them to build a prototype within a set period of time, you’ve got yourself a hackathon. The stereotype is that they’re fueled by pizza, caffeine, and beer.",
  },
  {
    title: "Immersive",
    description:
      "Immersive events normally follow a tight narrative that leads the participant through the story, with the help of actors who always stay in character and settings like you might find on a movie set. This is a favorite event for fans of zombies and apocalypse scenarios and can even be held online by asking attendees to tune into a livestream.",
  },
  {
    title: "Improv show",
    description:
      "Improvisational comedy is where the performers have no set script, and instead develop ideas from the audience into jokes and sketches on the fly.",
  },
  {
    title: "Interview or fireside chat",
    description:
      "This is a great format for those who want a keynote speaker but can’t invest the time in creating a presentation. Instead, you can set up a microphone and camera or, if venues are open, put them on stage and ask all of the questions you and your audience want to know.",
  },
  {
    title: "Meet-up",
    description:
      "Whatever your interest — punk rock fan club, property investors, book club — it’s always great to connect with like-minded people and enjoy conversation with those who share a passion. Of course, a meet-up can be held virtually if needed.",
  },
  {
    title: "Networking evening",
    description:
      "Often geared towards professionals, networking events are designed to bring like-minded people together to chat, share experiences, and hopefully find common ground that will ultimately lead to a mutually beneficial business relationship. Sometimes, they’re just about eating pizza and having a drink together — virtually or otherwise.",
  },
  {
    title: "Open mic",
    description:
      "An event where you get the chance to be the star of the show. They usually focus on poetry, music, and comedy and give aspiring artists the chance to showcase their skills and get comfortable performing in front of people (even if those people are behind a screen).",
  },
  {
    title: "Paint jam",
    description:
      "Grab some brushes, paint, and a canvas, hop online and you’ve got yourself a paint jam. People love watching amazing art come to life.",
  },
  {
    title: "Panel session",
    description:
      "A perennial favorite at conferences, they can also be stand-alone events. Gather a few experts, throw in a moderator and a series of questions on their topic of expertise, and you’ve got yourself a panel.",
  },
  {
    title: "Participatory",
    description:
      "This is where attendees become a part of the event, helping to shape and change the experience and the outcome as it goes. This dynamic makes them unpredictable and exciting, and always unique.",
  },
  {
    title: "Party",
    description:
      "Do we have to define a party for you? Really? Okay, then… parties are simply a gathering of people (friends or strangers) who come together to have fun, relax, and often celebrate something (whether that’s a birthday, wedding, or just the arrival of Friday and another weekend). The best thing is, attendees don’t even need to leave their homes — they can party virtually.",
  },
  {
    title: "Performance art",
    description:
      "You never know what to expect from performance art. It’s as completely original and unique as the artist with very little common ground between one event and another. They typically combine elements of theater, film, music, video, spoken word, or artistic discipline into an original statement.",
  },
  {
    title: "Pitch",
    description:
      "The format is normally a rapid-fire session of startups or speakers pitching to the audience, or a panel of experts, usually to win a prize.",
  },
  {
    title: "Presentation",
    description:
      "A presentation isn’t another word for “PowerPoint,” contrary to the popular understanding of most conference speakers. A presentation should inform, persuade, or build goodwill. While usually found as part of a conference or other larger event, there’s no reason you can’t have a single presentation as the star of your virtual event.",
  },
  {
    title: "Product launch",
    description:
      "Product launch events are often held in a party format to showcase a company’s latest release, so they’ll generally involve a demo, lots of cool branding, important people, and, if in-person, plenty of drinks and nibbles.",
  },
  {
    title: "Prom",
    description:
      "An American staple and movie classic, it involves giving your attendees the chance to relive their high school experience — with (legal) drinks. Hosting it virtually is simple, too — just provide attendees with home decorations and ask them to dress up.",
  },
  {
    title: "Puzzle or escape room",
    description:
      "Solve puzzles in a group, within a certain amount of time, in a closed space or online. This creates the right mix of excitement, curiosity, and agitation to make this format a recent stand-out success.",
  },
  {
    title: "Q&A",
    description:
      "Question and answer sessions are very common after a talk or panel at a business event, but they’re not limited to that situation. Artists will often launch their latest film or book with a Q&A session so that their fans get a chance to dig behind the scenes and ask their burning questions.",
  },
  {
    title: "Quiz",
    description:
      "This fun event usually consists of groups or teams competing against each other, and a “quizmaster” who poses questions to the competing teams. Each group then writes down (or types) answers to each question with the winning team having the most correct answers.",
  },
  {
    title: "Race",
    description:
      "A race is any competitive endurance event, over a specified distance or time, usually running, cycling, or swimming. It occasionally involves an egg and spoon or sack. Where spaces are closed, try competing virtually.",
  },
  {
    title: "Rally",
    description:
      "A rally is pretty synonymous with politics and social issues, which take the form of a whole lot of people taking to the streets — or to the internet — in support of (or against) a specific shared cause.",
  },
  {
    title: "Rave",
    description:
      "Big in the 90s, less so today… but what about getting your attendees to party like it’s 1999? They had the internet back then, right?",
  },
  {
    title: "Religious events",
    description:
      "Whatever your religion, events will likely play a crucial role in bringing together believers, sharing a common message, or raising funds.Whatever your religion, events will likely play a crucial role in bringing together believers, sharing a common message, or raising funds.",
  },
  {
    title: "Retreat",
    description:
      "This can involve attendees coming together online or in-person, often over a weekend or longer, to meditate, relax, and find peaceful conversation.",
  },
  {
    title: "Reunion",
    description:
      "While you might associate a reunion with high school or college classmates, there’s no reason to keep them so limited. Host a virtual reunion of old co-workers or colleagues, or reunite with last season’s extracurricular sports league.",
  },
  {
    title: "Ribbon cutting",
    description:
      "The classic “ribbon-cutting” event has the town mayor, dignitary, or famous guest come to open up a new public space, like a school or library. It’s a great way to gather the community — even virtually — and acknowledge the new amenities.",
  },
  {
    title: "Roasts",
    description:
      "Roasts, in the opposite tradition of toasts, are events where the main subject is honored but with some gentle mocking and ribbing. A great way to keep egos in check, it’s like a best man’s speech, minus the wince-inducing innuendos.",
  },
  {
    title: "Roundtable",
    description:
      "All in attendance in person or through a virtual platform are posed the same question and then debate the answer. Think city planning, business innovation, or political issues as the kind of topics often discussed at roundtables.",
  },
  {
    title: "Scavenger hunt or treasure hunt",
    description:
      "Virtual scavenger hunts like the New-York Historical Society‘s can be a fun and enjoyable way to get people working together.",
  },
  {
    title: "Film screening",
    description:
      "Ranging from virtual Saturday nights at the movies to exclusive documentary screenings to raise money for charity, screening events can be surprisingly diverse and flexible.",
  },
  {
    title: "Secret event",
    description:
      "Keeping the agenda of your event a mystery really engages people’s curiosity. Sometimes, telling them nothing at all makes them buy a ticket just to find out what it’s all about.",
  },
  {
    title: "Seminar",
    description:
      "This session  event focuses on a single theme where attendees are invited to participate by following along with specially designed academic exercises.",
  },
  {
    title: "Signing engagement",
    description:
      "Signings are generally associated with books, so fans and readers can meet their favorite author and get their latest release signed by them. They’re also a common component of fandoms and comicons, too. But where venues such as bookstores or conventions are closed or limited, fans can still connect virtually.",
  },
  {
    title: "Silent auction",
    description:
      "Like an auction, but virtual or in-person bids are placed in a closed box, with no one knowing how much anyone has bid. The box is then unlocked and the highest bid wins.",
  },
  {
    title: "Standup or comedy show",
    description:
      "Everyone loves to laugh, and standup has been around as an event format since Ancient Greek times to service this basic human need.",
  },
  {
    title: "Talent or variety show",
    description:
      "A competition where entrants compete to demonstrate their unique talent in front of an audience and judging panel. Hold it through a virtual platform like Zoom or in person if regulations allow.",
  },
  {
    title: "Tastings",
    description:
      "Tastings give you a tantalizing flavor of what’s to come. If you have a workshop or series of classes, they could be a great way to get people interested in your more expensive offering. For a virtual event, either send the drink or food to attendees or make sure they know what’s on the menu beforehand, so that everyone can follow along at home.",
  },
  {
    title: "The arts",
    description:
      "Here we mean ballet, musicals, opera, and theater. Yes, we’ve lumped four major types of events into one, because they share a common factor — a center stage occupied by talented artists, appreciated by an attentive audience. With many performance stages being closed or limited, attendees can also enjoy the arts virtually.",
  },
  {
    title: "Unconference",
    description:
      "Unlike conferences, they focus on a specific theme but with no pre-formed agenda. Attendees usually decide the topics for discussion at the start of the day (or virtual session) and then self-regulate as the event progresses.",
  },
  {
    title: "Virtual reality",
    description:
      "A new type of event that will continue to grow is virtual reality, whether it’s used to make an in-person event more interesting or bring a unique live experience to remote attendees. The possibilities are endless.",
  },
  {
    title: "Virtual tour",
    description:
      "These are events led by an expert on the location or focus of the tour — who guides the group between venues on camera.",
  },
  {
    title: "Webinars",
    description:
      "An online seminar where attendees dial in either by phone or web and follow the slides on screen. It’s a great event if lead capture or education are your primary objectives, and there’s also the option for live Q&A, too.",
  },
  {
    title: "Workshops",
    description:
      "Workshops are often used interchangeably with training sessions, but their traditional meaning was a room where people could build stuff. So in event terms, your event should probably focus on helping people create something tangible — like a painting or teapot warmer.",
  },
];

function Info() {
  const classes = useStyles();

  const renderList = () => {
    return pick.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Typography style={{ fontSize: "28px", fontWeight: 700 }}>
            Event idea #{index + 1}: {item.title}
          </Typography>
          <Typography style={{ fontFamily: "Quicksand" }}>
            {item.description}
          </Typography>
          <br />
          <br />
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <Container id="pick-category" className={classes.root}>
      <Typography className={classes.heading}>
        Do you have trouble deciding which category to enter?
      </Typography>
      <Typography className={classes.body} style={{ fontFamily: "Quicksand" }}>
        Do you ever struggle to come up with new event ideas or wonder how to
        keep the attendee experience fresh and new by reinventing it? You may be
        searching for fun virtual event ideas as rules for in-person events
        shift constantly and the growth of online events continues. To get you
        started, we've put together a list of some common event theme ideas and
        formats that you can mix and match for your next great event, whether
        it's online, in person, or a combination of both.
      </Typography>
      <br />
      <br />
      <Typography style={{ fontSize: "35px" }}>
        Here are the Event Ideas and Formats to Inspire Your Next Great Event
      </Typography>
      <br />
      <br />
      <List>
        {renderList()}

        <Typography style={{ fontFamily: "Quicksand", fontSize: "25px" }}>
          Couldn't find the category of your choice.{" "}
          <Link
            to={{
              pathname: "mailto:" + data.contact.email,
            }}
            target="_blank"
          >
            Submit your query
          </Link>
        </Typography>
      </List>
    </Container>
  );
}

export default Info;
