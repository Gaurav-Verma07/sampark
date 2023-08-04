import React from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Text } from '@mantine/core';
import EventAdminCard from './EventsAdminCard';

interface EventsDataType {
  name: string;
  organizer: string;
  address: string;
  description: string;
  date: string;
  image: string;
  duration: number;
  index: number;
}

function AllEvents() {
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  const [allEventsData, setAllEventsData] = useState<EventsDataType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/admin/events/getall`).then((response) =>
        response.json(),
      );
      if (res.data.success) {
        setAllEventsData(res.data.event);
        setInitialLoading(false);
      }
    } catch (error) {
      toast.error('Something went wrong. Please Try Again', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      });
    }
  };

  return (
    <div>
      {initialLoading ? (
        'Loading'
      ) : (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingTop: '100px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <Text size="xl" weight={700} style={{ marginRight: '20px' }}>
              All Events
            </Text>
            <Button style={{ marginLeft: '20px' }}>Add Events</Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, 300px)',
              gap: '20px',
            }}
          >
            {allEventsData.length > 0 ? (
              allEventsData.map((data: EventsDataType, index: number) => (
                <EventAdminCard
                  address={''}
                  description={''}
                  index={index}
                  {...data}
                  key={index}
                />
              ))
            ) : (
              <div
                style={{
                  borderRadius: '20px',
                  background: '#E8E8E8',
                  padding: '20px',
                }}
              >
                <span style={{ color: 'transparent', fontSize: '24px' }}>
                  No Event created
                </span>
              </div>
            )}
          </div>
        </section>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
    </div>
  );
}

export default AllEvents;
