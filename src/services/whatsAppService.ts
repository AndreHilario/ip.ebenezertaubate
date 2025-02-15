export const handleWhatsAppRedirect = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/5512982245338?text=${encodedMessage}`, "_blank");
};
