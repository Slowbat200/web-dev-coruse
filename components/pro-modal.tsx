'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useProModal } from '@/hooks/use-pro-modal';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from '@/components/ui/use-toast';

export const ProModal = () => {
  const proModal = useProModal();
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(()=>{
    setIsMounted(true)
  },[])

  const onSubscribe = async () => {
    try{
        setIsLoading(true)
        const response = await axios.get('/api/stripe')
        window.location.href = response.data.url
    }catch(error){
        toast({
            variant: 'destructive',
            description:'Something went wrong'
        })
    }finally{
        setIsLoading(false)
    }
  }
  
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className='space-y-4'>
            <DialogTitle className='text-center'>
                Upgrade to PRO
            </DialogTitle>
            <DialogDescription>Explore new things.</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className='flex justify-between'>
            <p className='text-2xl font-medium'>$3
                <span className='text-sm font-normal'>.99 / month</span>
            </p>
            <Button onClick={onSubscribe} disabled={isLoading}>Subscribe</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

