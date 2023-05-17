import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => { 
  const router = useRouter()
  const {data, isLoading, error} = useFetch(
    'search', {
      query: 'Reach developer',
      num_pages: 1
    }
    )

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size='large' />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({item}) => (
              <PopularJobCard
                item = {item}
                onPress={() => router.push('/jobdetails')}
              />
            )}
            keyExtractor={(item) => item?.job_id?.toString()}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs