'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDraftModeEnvironment, useIsPresentationTool } from 'next-sanity/hooks';
import { disableDraftMode } from '~/app/actions';
import s from './draft-mode-toast.module.css';

export default function DraftModeToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: 'Draft Mode Enabled',
    description: '',
  });

  const isPresentationTool = useIsPresentationTool();
  const env = useDraftModeEnvironment();
  const router = useRouter();

  useEffect(() => {
    if (isPresentationTool === false) {
      setModalMessage({
        title: 'Draft Mode Enabled',
        description:
          env === 'live'
            ? 'Content is live, refreshing automatically'
            : 'Refresh manually to see changes',
      });
      setIsVisible(true);
    }
  }, [env, isPresentationTool]);

  const handleDisableDraftMode = async () => {
    setIsLoading(true);
    try {
      await disableDraftMode();
      router.refresh();
    } catch (error) {
      console.error('Failed to disable draft mode', error);
    } finally {
      setIsLoading(false);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  if (isLoading) {
    return (
      <div className={s.modalOverlay}>
        <div className={s.loadingModal}>
          <p>Disabling draft mode...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.modal}>
      <div className={s.content}>
        <h2 className={s.title}>{modalMessage.title}</h2>
        <p className={s.description}>{modalMessage.description}</p>
      </div>
      <button onClick={handleDisableDraftMode}>Disable</button>
      {/*   <button className={`${s.modalButton} ${s.closeButton}`} onClick={() => setIsVisible(false)}> */}
      {/*     Close */}
      {/* </button> */}
    </div>
  );
}
