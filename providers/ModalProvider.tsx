'use client';

import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';

import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This useEffect can ensure none of modals is seen or rendered during SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
