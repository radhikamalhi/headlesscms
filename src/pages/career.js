import { useEffect, useState } from 'react';
import api from '../api/api';

// Component to fetch and display image by ID
function ImageFromID({ id, alt }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchImage = async () => {
      try {
        const res = await api.get(`/media/${id}`);
        setUrl(res.data.source_url);
      } catch (error) {
        console.error("Failed to fetch image URL for ID:", id, error);
      }
    };

    fetchImage();
  }, [id]);

  if (!url) return <p>Loading image...</p>;

  return <img src={url} alt={alt || "acf image"} />;
}

function Career() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await api.get("/pages?slug=career-page");
        setPage(res.data[0]);
        console.log(res.data);
      } catch (err) {
        console.log("issue in fetching acf data", err);
      }
    };
    fetchdata();
  }, []);

  if (!page) return <p>Loading...</p>;

  const acfcontent = page.acf?.career_group;

  return (
    <div className='about-box container'>
      <h1 className='text-center'>{acfcontent?.title}</h1>

      {acfcontent?.career_groups?.map((item, index) => (
        <div className='row align-items-center post-row' key={index}>
          <div className='col-lg-6'>
            <div className='content-left-side'>
              <h2>{item.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='image-side'>
              {/* If image is object with url, use it, else if number (ID) fetch */}
              {typeof item.image === "object" && item.image?.url ? (
                <img src={item.image.url} alt={item.heading} className='w-100 img' />
              ) : typeof item.image === "number" ? (
                <ImageFromID id={item.image} alt={item.heading} />
              ) : (
                // fallback if image is URL string
                <img src={item.image} alt={item.heading} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Career;
