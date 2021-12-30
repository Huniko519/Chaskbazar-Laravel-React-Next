import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import BrandBlock from "@containers/brand-block";
import CategoryGridBlock from "@containers/category-grid-block";
import FeatureBlock from "@containers/feature-block";
import { getLayout } from "@components/layout/layout";
import CollectionBlock from "@containers/collection-block";
import Divider from "@components/ui/divider";
import ProductsWithFlashSale from "@containers/products-with-flash-sale";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import HeroWithCategory from "@containers/hero-with-category";
import BannerGridBlock from "@containers/banner-grid-block";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import Subscription from "@components/common/subscription";
import { ROUTES } from "@lib/routes";

export { getStaticProps } from "@framework/ssr/homepage/minimal";

const flashSaleCarouselBreakpoint = {
  "1281": {
    slidesPerView: 1,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

export default function Home({banners}: any) {
  return (
    <Container>
      <HeroWithCategory banners={banners?.homeTwoHeroBanner} />
      <ProductsWithFlashSale carouselBreakpoint={flashSaleCarouselBreakpoint} />
      <BannerGridBlock banners={banners?.bannerGrid} />
      <CategoryGridBlock sectionHeading="text-featured-categories" />
      <Divider />
      <BestSellerProductFeed />
      <BannerCard
        key={`banner--key${banners?.homeOneBanner?.id}`}
        banner={banners?.homeOneBanner}
        href={`${ROUTES.COLLECTIONS}/${banners?.homeOneBanner?.slug}`}
        className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      />
      <NewArrivalsProductFeed />
      <Divider />
      <BrandBlock sectionHeading="text-top-brands" />
      <FeatureBlock banners={banners?.featureBlock}/>
      <CollectionBlock banners={banners?.collectionBlock} />
      <DownloadApps />
      <Support />
      <Subscription />
    </Container>
  );
}

Home.getLayout = getLayout;
