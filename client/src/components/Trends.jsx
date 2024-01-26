"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Trends() {
  const [trends, setTrends] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/api/trends")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setTrends(data.results.slice(0, 5));
        } else {
          console.error("Results array not found in data:", data);
        }
      })
      .catch((error) => console.error("Error fetching trends:", error));
  }, []);

  return (
    <section>
      <h4 className="text-xl font-bold">Trends</h4>
      <div className="mt-4">
        <ul className="flex gap-3 items-center justify-between">
          {trends.map((trend) => (
            <li
              key={trend.id}
              onMouseEnter={() => setHoveredMovie(trend)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <Link href={`/trend/${trend.id}`}>
                <div
                  className={`absolute z-10 top-32 p-2 shadow-xl w-auto rounded-full
                    ${
                      trend.vote_average >= 7
                        ? "bg-green-500"
                        : trend.vote_average >= 5 && trend.vote_average <= 6.9
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                >
                  {trend.vote_average}
                </div>
                <div>
                  <Image
                    className="w-auto h-auto rounded-md relative"
                    src={`https://image.tmdb.org/t/p/w300${trend.poster_path}`}
                    alt="Trend"
                    width={300}
                    height={300}
                    priority={true}
                  />

                  {hoveredMovie === trend && (
                    <div className="absolute z-10 top-[360px] bg-neutral-900 bg-opacity-90  w-[211px] h-[91px] rounded-b-md">
                      <h3 className="max-w-[200px] text-lg p-2">
                        {trend.title}
                      </h3>
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
