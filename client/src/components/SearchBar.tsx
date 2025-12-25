import {
  Button,
  Input,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import servers from "../data/servers";
import { serverOptions } from "../types/routing";
import { Routing } from "../types/routing";

interface searchBarProps {
  handleSearch: (gameName: string, tagLine: string, routing: Routing) => void;
}

const SearchBar = ({ handleSearch }: searchBarProps) => {
  const [selectedServer, setSelectedServer] = useState<serverOptions>(
    servers[0]
  );

  const [gameName, setGameName] = useState<string>("");

  const [tagLine, setTagLine] = useState<string>("");

  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center rounded-lg shadow-lg p-8">
      <Listbox value={selectedServer} onChange={setSelectedServer}>
        <ListboxButton className="bg-blue-400 rounded-lg mr-4 py-2 px-4 text-white cursor-pointer">
          {selectedServer.label}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="bg-blue-400 rounded-lg cursor-pointer mt-1"
        >
          {servers.map((server) => (
            <ListboxOption
              key={server.id}
              value={server}
              className="hover:bg-blue-100 py-2 px-4 text-white text-center"
            >
              {server.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      <Input
        placeholder="Enter Game Name"
        className="outline-1 w-50 mr-2"
        value={gameName}
        onChange={(e) => {
          setGameName(e.target.value);
        }}
      />
      <Input
        placeholder="Enter Tag Line"
        className="outline-1 w-30 mr-2"
        value={tagLine}
        onChange={(e) => {
          setTagLine(e.target.value);
        }}
      />
      <Button
        disabled={!gameName && !tagLine}
        className={`${
          gameName && tagLine
            ? "cursor-pointer bg-blue-400"
            : "cursor-not-allowed bg-gray-400"
        } rounded-lg py-2 px-4 text-white transition-colors duration-300`}
        onClick={() => handleSearch(gameName, tagLine, selectedServer.value)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
