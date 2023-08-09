import React from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Text } from '@mantine/core';
import BlogAdminCard from './BlogAdminCard';

interface BlogsDataType {
 _id:string;
  name: string;
  content: string;
  image: string;
  author:string;
}

function AllBlogs() {
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  const [allBlogsData, setAllBlogsData] = useState<BlogsDataType[]>([]);
   const [deleteId, setDeleteId] = useState<string>('');

  useEffect(() => {
    getData();
  }, []);

   useEffect(() => {
    setAllBlogsData((prevData) =>
      prevData.filter((data: BlogsDataType) => data._id !== deleteId),
    );
  }, [deleteId]);

  const getData = async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`/api/admin/blogs/getall`).then((response) =>
        response.json(),
      );
      if (res.data.success) {
        setAllBlogsData(res.data.blog);
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
              All Blogs
            </Text>
            <Button style={{ marginLeft: '20px' }}>Add Blogs</Button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, 300px)',
              gap: '20px',
            }}
          >
            {allBlogsData.length > 0 ? (
              allBlogsData.map((data: BlogsDataType, index: number) => (
                <BlogAdminCard
                  setDeleteId={setDeleteId}
                  blog={data}
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
                  No Blog created
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

export default AllBlogs;
