"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Acordionui() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const data = [
    {
      label: "Lower the Cost of Living",
      text: "Inflation remains a concern for New Hampshire families. While this is, in part, due to\
      reckless spending in Washington, Concord can help ease the burden. The solution\
      begins with lowering taxes for individuals. I pledge never to raise a tax on Granite\
      Staters. We can also minimize business regulations, permits, and paperwork that\
      drive up costs.",
    },
    {
      label: "Defend Liberty",
      text: "“Live Free or Die” is not just a slogan, it is our way of life. My political philosophy is\
      strongly influenced by Thomas Jefferson who said, “The government is best which\
      governs least”. I am driven not by partisanship but by the US and NH Constitutions. I\
      will always fight to protect Constitutional Carry, religious freedom, medical\
      freedom, and due process of law. I look forward to passing Defend the Guard into\
      law because Congress should be required to declare war if the NH National Guard is\
      being sent into overseas combat zones.",
    },
    {
      label: "Increase Educational Opportunities",
      text: "I am a firm believer in equality of opportunity. Every child, regardless of their\
  background, deserves access to a quality education. I support universal education\
  freedom. Parents know their children best, so I will empower families in deciding\
  where to send their children. I look forward to sponsoring a Parental Bill of Rights\
  because I have firsthand experience in our public school system.",
    },
    {
      label: "Secure our Border",
      text: "The Border Crisis is a top issue for many of the voters that I speak to. While it may\
      seem like a distant issue, illegal immigrants are an imminent threat to the Granite\
      State because Massachusetts is welcoming them. For the sake of our safety, I draw\
      the line and demand that the law followed. I will never allocate funds towards\
      housing illegals. I will vote for legislation that bans sanctuary cities in New\
      Hampshire. My number one priority related to the border is securing our Northern\
      border by enabling law enforcement with the appropriate resources.",
    },
    {
      label: "Fight for Rochester",
      text: "As a State Rep in Concord, I will remain accountable to the citizens of Rochester. I\
      will hold monthly town hall meetings to answer questions on local issues. I look\
      forward to developing more relationships with my fellow citizens.",
    },
  ];
  return (
    <Accordion
      variant="splitted"
      className="text-[#0E6400]"
      style={{
        color: "#0E6400",
      }}
    >
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.label} aria-label={item.label}>
          {item.text}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
