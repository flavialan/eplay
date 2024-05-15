import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import { useGetSoonQuery, useGetOnSaleQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductList
        games={soonGames}
        title="Em breve"
        background="black"
        id="soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
