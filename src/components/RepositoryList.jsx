import { FlatList, View, StyleSheet, Image } from 'react-native'
import Text, { SubHeading, Heading } from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 15,
  },
  itemContainter: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langStyle: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginStart: 80,
    padding: 5,
    borderRadius: 5,
  },
  infoStyle: {
    alignItems: 'center',
    margin: 20,
  },
})

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
]

const ItemSeparator = () => <View style={styles.separator} />

const StatBox = ({ title, children }) => {
  function roundThousands(number) {
    if (number < 1000) return number
    else return `${Math.round(number / 100) / 10}k`
  }

  return (
    <View style={styles.infoStyle}>
      <Text style={{ fontWeight: 'bold' }}>{roundThousands(children)}</Text>
      <Text>{title}</Text>
    </View>
  )
}

const RepositoryItem = ({ rep }) => {
  return (
    <View style={styles.itemContainter}>
      <View style={styles.itemRow}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: rep.ownerAvatarUrl,
          }}
        />
        <View style={{ flexShrink: 1, marginRight: 10 }}>
          <Heading>{rep.fullName}</Heading>
          <SubHeading>{rep.description}</SubHeading>
        </View>
      </View>
      <View style={styles.langStyle}>
        <Text style={{ color: theme.colors.textAppbar }}>{rep.language}</Text>
      </View>
      <View style={[styles.itemRow, { justifyContent: 'center' }]}>
        <StatBox title={'Stars'}>{rep.stargazersCount}</StatBox>
        <StatBox title={'Forks'}>{rep.forksCount}</StatBox>
        <StatBox title={'Reviews'}>{rep.reviewCount}</StatBox>
        <StatBox title={'Rating'}>{rep.ratingAverage}</StatBox>
      </View>
    </View>
  )
}

const RepositoryList = () => {
  return (
    <>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item, index }) => (
          <RepositoryItem key={index} rep={item} />
        )}
      />
    </>
  )
}

export default RepositoryList
