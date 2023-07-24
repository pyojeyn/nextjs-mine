import { useRouter } from 'next/router';

const ShopPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log("slug", slug);

    return (
        <div>
            <h1>SHOP_PAGE: {slug}</h1>
            <h2>안녕 ㅎㅎㅎ 여긴 샵이댜 !</h2>
            {/* 여기서 slug를 이용하여 해당 데이터를 표시하거나 필요한 처리를 합니다. */}
        </div>
    );
};

export default ShopPage;