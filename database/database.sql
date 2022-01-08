CREATE DATABASE quicknew;

CREATE TABLE savednews(
  id SERIAL PRIMARY KEY,
  abstract VARCHAR(250),
  byline VARCHAR(250),
  title VARCHAR(250),
  multimediaurl VARCHAR(250),
  multimediacaption VARCHAR(250),
  urlink VARCHAR(250),
  section VARCHAR(250)
);

INSERT INTO savednews (abstract, byline, title, multimediaurl, multimediacaption, urlink, section)
  VALUES("The military never conducted an independent investigation into a 2019 bombing on the last bastion of the Islamic State, despite concerns about a secretive commando force.",
  "By Dave Philipps and Eric Schmitt", "How the U.S. Hid an Airstrike That Killed Dozens of Civilians in Syria", "https://static01.nyt.com/images/2021/11/14/us/politics/13airstrike-jump-1-alt/13airstrike-jump-1-alt-superJumbo-v2.jpg",
  "Fleeing heavy bombardment in Baghuz, Syria — the Islamic State’s last holdout — on March 18, 2019.", "https://www.nytimes.com/2021/11/13/us/us-airstrikes-civilian-deaths.html", "us"),
  ("A fast-moving storm affected New York City, Long Island and New Jersey, leaving in its wake uprooted trees and some power failures.", "By Troy Closson and Isabella Grullón Paz"
  "Storm Batters Long Island With Hail and Prompts Rare Tornado Warnings", "https://static01.nyt.com/images/2021/11/13/lens/13xp-storms-photo/13xp-storms-photo-superJumbo.jpg", 
  "High winds that were part of a fast-moving storm on Saturday took down trees and branches in Lynbrook on Long Island.", "https://www.nytimes.com/2021/11/13/nyregion/tornado-storm-long-island-nyc.html", "nyregion");