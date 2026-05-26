import { useRouter } from "expo-router";
import {
  Text,
  View,
  ActivityIndicator,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ChatItem from "@/components/ChatItem";
import EmptyUI from "@/components/EmptyUI";
import { Chat } from "@/types";
import { useChats } from "@/hooks/useChat";

const ChatsTab = () => {
  const router = useRouter();
  const { data: chats, isLoading, error, refetch } = useChats();

  if (isLoading) {
    return (
      <View className="flex-1 bg-surface items-center justify-center">
        <ActivityIndicator size={"large"} color={"#f4A261"} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-surface items-center justify-center px-8 py-20">
        {/* Icon Container */}
        <View className="w-28 h-28 rounded-full bg-red-500/10 border border-red-500/20 items-center justify-center">
          <Ionicons name="alert-circle-outline" size={64} color="#EF4444" />
        </View>

        {/* Heading */}
        <Text className="text-2xl font-bold text-foreground mt-8 text-center">
          Something went wrong
        </Text>

        {/* Description */}
        <Text className="text-muted-foreground text-base text-center mt-3 leading-6">
          We couldn&apos;t load your chats right now. Please check your
          connection and try again.
        </Text>

        {/* Retry Button */}
        <Pressable
          onPress={() => refetch()}
          className="mt-8 bg-primary px-8 py-4 rounded-2xl active:scale-95"
        >
          <Text className="text-white font-semibold text-base">Try Again</Text>
        </Pressable>
      </View>
    );
  }

  const handleChatPress = (chat: Chat) => {
    router.push({
      pathname: "/chat/[id]",
      params: {
        id: chat._id,
        participantId: chat.participant._id,
        name: chat.participant.name,
        avatar: chat.participant.avatar,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="flex-1 bg-surface">
        <FlatList
          data={chats}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <ChatItem chat={item} onPress={() => handleChatPress(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 24,
          }}
          ListHeaderComponent={<Header />}
          ListEmptyComponent={
            <EmptyUI
              title="No chats yet"
              subtitle="Start a conversation!"
              iconName="chatbubbles-outline"
              iconColor="#6B6B70"
              iconSize={64}
              buttonLabel="New Chat"
              onPressButton={() => console.log("pressed")}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatsTab;

function Header() {
  const router = useRouter();

  return (
    <View className="px-4 pb-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-foreground">Chats</Text>
        <Pressable
          className="size-10 bg-primary rounded-full items-center justify-center"
          // onPress={() => router.push("/new-chat")}
        >
          <Ionicons name="create-outline" size={20} color="#0D0D0F" />
        </Pressable>
      </View>
    </View>
  );
}
