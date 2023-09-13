import { listContacts, listWordsOfContacts } from "@/data/data";

import { FC } from "react";
import Image from "next/image";
import SectionTitle from "../../shared/ui/section-title/section-title";

const Contacts: FC = () => {
  return (
    <section className="container flex flex-col gap-10 text-center">
      <SectionTitle variant="medium">Help at every step</SectionTitle>
      <div className="flex items-center gap-6 justify-center">
        {listContacts.map((contact) => (
          <Image src={contact} alt="contact image" className="rounded-3xl" />
        ))}
      </div>
      <div className="flex gap-5 flex-wrap px-28 items-center justify-center">
        {listWordsOfContacts.map((contact) => (
          <>
            <p className="font-bold text-4xl">{contact.word}</p>
            {contact.image && <Image src={contact.image} alt="star" />}
          </>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
