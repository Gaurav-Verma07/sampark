import React from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Text } from '@mantine/core';
import NgoAdminCard from './NgoAdminCard';

interface NgosDataType {
  id: number;
  name: string;
  content: string;
  author: string;
  image: string;
}

function AllNgos() {
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  const [allNgosData, setAllNgosData] = useState<NgosDataType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/admin/ngos/getall`).then((response) =>
        response.json(),
      );
      console.log(res);
      if (res.data.success) {
        setAllNgosData(res.data.ngo);
        setInitialLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.success('Something went wrong. Please Try Again', {
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
              All Ngos
            </Text>
            <Button style={{ marginLeft: '20px' }}>Add Ngos</Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, 300px)',
              gap: '20px',
            }}
          >
            {allNgosData.length > 0 ? (
              allNgosData.map((data, index) => (
                <NgoAdminCard
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
                  No Ngo created
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

export default AllNgos;
