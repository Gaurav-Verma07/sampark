import React from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrphanageAdminCard from './OrphangeAdminCard';
import { Button, Text } from '@mantine/core';

interface OrphanagesDataType {
  _id: string;
  name: string;
  address: string;
  description: string;
  image: string;
}

function AllOrphanages() {
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  const [deleteId, setDeleteId] = useState('');

  const [allOrphanagesData, setAllOrphanagesData] = useState<
    OrphanagesDataType[]
  >([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setAllOrphanagesData((prevData) =>
      prevData.filter((data: OrphanagesDataType) => data._id !== deleteId),
    );
  }, [deleteId]);

  const getData = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/admin/orphanage/getall`).then((response) =>
        response.json(),
      );
      console.log(res);
      if (res.data.success) {
        setAllOrphanagesData(res.data.orphanage);
        setInitialLoading(false);
      }
    } catch (error) {
      console.log(error);
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
          id="add-Cfp"
        >
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <Text size="xl" weight={700} style={{ marginRight: '20px' }}>
              All Orphanages
            </Text>
            <Button style={{ marginLeft: '20px' }}>Add Orphanages</Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, 300px)',
              gap: '20px',
            }}
          >
            {allOrphanagesData.length > 0 ? (
              allOrphanagesData.map((data, index) => (
                <OrphanageAdminCard
                  orphanage={data}
                  setDeleteId={setDeleteId}
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
                  No Orphanage created
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

export default AllOrphanages;
