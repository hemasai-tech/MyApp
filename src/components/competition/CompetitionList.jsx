import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const CompetitionList = (props) => {
  const { navigation } = props;

  const [competitionList, setCompetitionList] = useState([
    {
      competitionName: "Asian Games (2026 Winter)",
      dateOfConduct: "2026-08-25",
      location: "Pyeongchang, Korea"
    },
    {
      competitionName: "Olympic Games (2028 Summer)",
      dateOfConduct: "2028-07-21",
      location: "Los Angeles, USA"
    },
    {
      competitionName: "FIFA World Cup (2026)",
      dateOfConduct: "2026-06-08",
      location: "Canada, USA, Mexico"
    },
    {
      competitionName: "UEFA Euro (2024)",
      dateOfConduct: "2024-06-14",
      location: "Germany"
    },
    {
      competitionName: "Commonwealth Games (2026)",
      dateOfConduct: "2026-03-17",
      location: "Victoria, Australia"
    },
    {
      competitionName: "Copa America (2024)",
      dateOfConduct: "2024-06-10",
      location: "Ecuador"
    },
    {
      competitionName: "Rugby World Cup (2023)",
      dateOfConduct: "2023-09-08",
      location: "France"
    },
    {
      competitionName: "World Athletics Championships (2025)",
      dateOfConduct: "2025-08-16",
      location: "Tokyo, Japan"
    },
    {
      competitionName: "ICC Cricket World Cup (2023)",
      dateOfConduct: "2023-10-05",
      location: "India"
    },
    {
      competitionName: "Winter Universiade (2025)",
      dateOfConduct: "2025-01-21",
      location: "Turin, Italy"
    }
  ]
  );

  const [selectedVal, setSelectedVal] = useState("");

  const onSelection = (item, index) => {
    setSelectedVal(item.competitionName);
    navigation.navigate("Register", {
      value: item.competitionName
    })

  }

  const renderCompetition = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.listView,
            { backgroundColor: index % 2 === 0 ? '#253BFF' : '#4C53FF' }
          ]}
          onPress={() => onSelection(item, index)}
        >
          <Text style={styles.listTxt}>{item.competitionName}</Text>
          <Text style={styles.listDate}>{item.dateOfConduct}</Text>
          <Text style={styles.listLocation}>{item.location}</Text>
        </TouchableOpacity>
      </>
    )
  }

  const showCompetitionList = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={competitionList}
          renderItem={renderCompetition}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }

  const headerCard = () => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.mainHeader}>
        <View style={styles.icon}>
          <Icon name='arrow-left' size={20} color="#000" />
        </View>
        <View style={styles.searchView}>
          <TextInput placeholder='Asian' placeholderTextColor={'#101828'} style={styles.input} />
          <Icon name='search' style={styles.search} size={20} color="#000" />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.mainView}>
      {headerCard()}
      {showCompetitionList()}
    </View>
  )
}

export default CompetitionList

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  listView: {
    borderRadius: 20,
    margin: 10,
    padding: 20
  },
  listTxt: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  listDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingVertical: 15
  },
  listLocation: {
    color: '#B8BFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  mainHeader: {
    flexDirection: 'row',
    margin: 10
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    paddingHorizontal: 25,
    color: '#101828',
  },
  icon: {
    backgroundColor: '#F9FAFB',
    borderRadius: 35,
    padding: 20
  },
  searchView: {
    backgroundColor: '#F9FAFB',
    marginHorizontal: 10,
    width: '80%',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  search: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 20
  },
  input: {
    padding: 15,
    fontSize: 16
  }
})