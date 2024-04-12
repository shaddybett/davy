import React from "react";
import sam from "../assets/images/sam.jpg";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div>
      <Link to='/'>
        <Button gradientDuoTone="purpleToBlue" className="mb-3 mt-2">
          {" "}
          Back
        </Button>
      </Link>

      <div className="grid gap-4 md:grid-cols-4">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={sam}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={sam}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={sam}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={sam}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Events;
