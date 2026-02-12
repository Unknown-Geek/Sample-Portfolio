import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const EventTabs = ({ events }) => {
    if (!events || events.length === 0) return null;

    const defaultTrigger = events[0].id;

    return (
        <Tabs.Root className="flex flex-col w-full h-full" defaultValue={defaultTrigger}>
            <Tabs.List className="flex border-b-2 border-black mb-4 overflow-x-auto">
                {events.map((event) => (
                    <Tabs.Trigger
                        key={event.id}
                        className="
              px-4 py-2 font-space font-bold uppercase text-sm border-r-2 border-black last:border-r-0
              data-[state=active]:bg-black data-[state=active]:text-white
              hover:bg-muted-slate transition-colors
              focus:outline-none 
            "
                        value={event.id}
                    >
                        {event.label}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>

            {events.map((event) => (
                <Tabs.Content key={event.id} className="font-inter text-base grow focus:outline-none" value={event.id}>
                    {event.content}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
};

export default EventTabs;
