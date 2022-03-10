import Topic from './Topic';

const TopicList = ({ topics, updateTopic }) => (
  <>
    { topics.map( t => 
      <Topic 
        key={t.id}
        // id={t.id} title={t.title} body={t.body}
        {...t}
        updateTopic={updateTopic}
      />
    )}
  </>
)

export default TopicList;