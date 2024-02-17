"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Path from "@/components/Path";
import Iframe from "react-iframe";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <div className="px-20 py-10">
      <Card className="bg-[#f9f9f9] shadow-lg">
        <div className="px-2">
          <Path tab={"Contact"} />
        </div>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <ContactCard
                  icon={<MapPin color="blue" size={30} />}
                  heading={"Our Address"}
                  content={`Engineer-in-Chief, Jal Shakti Vibhag, Jal Shakti Bhawan, Shimla. PIN -
          171005 (Himachal Pradesh) India`}
                />
              </div>
              <div className="col-span-2">
                <ContactCard
                  icon={<MailIcon color="blue" size={30} />}
                  heading={"Email Us"}
                  content={"hpirrg@rediffmail.com"}
                />
              </div>
              <ContactCard
                icon={<PhoneIcon color="blue" size={30} />}
                heading={"Call Us"}
                content={"0177 2830241"}
              />
            </div>
            <iframe
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13665.345903395486!2d77.1443210960544!3d31.100378806939997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6e35ae1989b2629!2sJal%20Shakti%20Bhawan%20HP%20I%26PH%20Head%20Office!5e0!3m2!1sen!2sin!4v1635413130024!5m2!1sen!2sin"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
