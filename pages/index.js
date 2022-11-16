import Image from 'next/image';
import NavLink from '../components/NavLink';
import styles from './index.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { showSiteName } from '../store/slices/generalSlice';
import { useSelector } from 'react-redux';

const Home = () => {
  const router = useRouter();
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: router.locale === 'he',
  };
  const siteName = useSelector(showSiteName);
  return (
    <>
      <section>
        <Head>
          <meta charSet='utf-8' />
          <title>{siteName}</title>
        </Head>
        <Slider {...sliderSettings}>
          <div className={styles.pageCover}>
            <Image
              alt='page cover'
              src='/img/homecover.jpg'
              layout='fill'
              objectFit='cover'
            />
            {/* <div className={styles.coverTitle}>SERVES</div> */}
          </div>
          <div className={styles.pageCover}>
            <Image
              alt='page cover'
              src='/img/servescover.jpg'
              layout='fill'
              objectFit='cover'
            />
            {/* <div className={styles.coverTitle}>SERVES</div> */}
          </div>
          <div className={styles.pageCover}>
            <Image
              alt='page cover'
              src='/img/servescover.jpg'
              layout='fill'
              objectFit='cover'
            />
            {/* <div className={styles.coverTitle}>SERVES</div> */}
          </div>
        </Slider>
      </section>
      <section>
        <div id='homeCircles' className={styles.homeCircles}>
          <div id='homeCircleContainer' className={styles.homeCircleContainer}>
            <div id='homeCircleCenter' className={styles.homeCircleCenter}>
              <div className={styles.homeCircleItem}>
                <NavLink href='' className={styles.circlelink}>
                  <div className={styles.homeCircleItem__img}>
                    <div className={styles.homeCircleItem__img_wrapper}>
                      <Image
                        alt='page cover'
                        src='/img/serversbtn.png'
                        layout='responsive'
                        width={286}
                        height={284}
                      />
                    </div>
                  </div>
                  <div className={styles.homeCircleItem__title}>IMPLANTS</div>
                  <div className={styles.homeCircleItem__desc}>
                    QRS מספקת את השטלים הטובים בעולם השטלים שלנו עוברים תהליך
                    קפדני ועומדים בסטנדרטים בינלואמיים
                  </div>
                </NavLink>
              </div>

              <div className={styles.homeCircleItem}>
                <NavLink href='' className={styles.circlelink}>
                  <div className={styles.homeCircleItem__img}>
                    <div className={styles.homeCircleItem__img_wrapper}>
                      <Image
                        alt='page cover'
                        src='/img/implantbtn.png'
                        layout='responsive'
                        width={286}
                        height={284}
                      />
                    </div>
                  </div>
                  <div className={styles.homeCircleItem__title}>IMPLANTS</div>
                  <div className={styles.homeCircleItem__desc}>
                    QRS מספקת את השטלים הטובים בעולם השטלים שלנו עוברים תהליך
                    קפדני ועומדים בסטנדרטים בינלואמיים
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Home.title = 'QRS MEDICAL';
export default Home;
