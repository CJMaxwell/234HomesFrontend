import Router from 'next/router';
import { notify } from 'react-notify-toast';
import { useState } from 'react';
import axios from 'axios';

export default function useAddHouseTours() {
  const [loading, setLoading] = useState(false);

  const createHouseTour = (data: FormData) => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URI}/house-tours`;
    setLoading(true);

    axios
      .post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        Router.push('/dashboard/house-tours');
      })
      .catch(() => {
        notify.show('House tour could not be added.', 'error');
        setLoading(false);
      });
  };

  return {
    createHouseTour,
    loading,
  };
}
