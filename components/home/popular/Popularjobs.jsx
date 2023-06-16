import React, {useState} from 'react'
import { 
  View, 
  Text,
  FlatList,
  ActivityIndicator,          // this is a spinner available in React-native.
  TouchableOpacity 
} from 'react-native'

import styles from './popularjobs.style';
import { useRouter } from 'expo-router';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from '../../../constants';
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, isError} = useFetch("search", {
    query: "React developer jobs", 
    num_pages: 1
  }) 
  const [selectedJob, setSelectedJob] = useState(); 

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading? (
                      <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : isError? (
                      <Text>Something went wrong!</Text>
                    ) : (
                      <FlatList
                        data={data}
                        renderItem={({item})=><PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />}
                        keyExtractor={item => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.small }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
                    )
        }

      </View>
      
    </View>
  )
}

export default Popularjobs