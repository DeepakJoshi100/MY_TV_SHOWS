import { FC, useEffect, useState } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { State } from "../store";
import { connect, ConnectedProps } from "react-redux";
import { showsLoadingSelector, showsMapSelector } from "../Selectors/Shows";
import { placeholderImage } from "../Models/Show";
import { Link } from "react-router-dom";
import { LoadShowAction } from "../Actions/Shows";
import LoadingSpinner from "../Components/LoadingSpinner";

type ownProps = WithRouterProps;
type ShowDetail_PageProps = ReduxProps & ownProps;

const ShowDetail_Page: FC<ShowDetail_PageProps> = ({
  params,
  show,
  loadShow,
}) => {
  useEffect(() => {
    loadShow(params.showId);
  }, [params.showId]);

  if (!show) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-2">
      <Link to="/"> Back</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genres) => (
          <GenrePill name={genres} key={genres} />
        ))}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium || placeholderImage}
          alt=""
          className="object-cover object-center  rounded-t-md h-72 w-full"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{ __html: show.summary || "" }}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating:
            <span className="text-gray-700">{show.rating.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: ownProps) => {
  return {
    show: showsMapSelector(state)[+ownProps.params.showId],
    loading: showsLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  loadShow: LoadShowAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetail_Page));
