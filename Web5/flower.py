from flask import Flask, config, json, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
#CORS(app)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flower.db'
db = SQLAlchemy(app)

class Flower_Objects(db.Model):
    name = db.Column(db.String(50), primary_key = True)
    color = db.Column(db.String(50))
    height = db.Column(db.Integer)
    price = db.Column(db.Integer)
    
@app.route('/index', methods=['POST'])
@cross_origin()
def contain_flowers():
    if request.method == 'POST':
        try:
            data = request.get_json()
            for flower in data:
                if 'name' in flower and 'color' in flower and 'height' in flower and 'price' in flower:
                    new_flower = Flower_Objects(name=flower['name'], color=flower['color'], height=flower['height'], price=flower['price'])
                    db.session.add(new_flower)
            db.session.commit()
            return jsonify({'message': 'Flowers got successfully'})
        except Exception as e:
            return jsonify({'error': 'An error occurred during adding flowers to the session', 'details': str(e)}), 500

@app.route('/create', methods=['POST'])
@cross_origin()
def create_flower():
    if request.method == 'POST':
        flower = request.get_json()
        existing_flower = Flower_Objects.query.filter_by(name=flower.get('name')).first()
        if not existing_flower:
            new_flower = Flower_Objects(name=flower['name'], color=flower['color'], height=flower['height'], price=flower['price'])
            try:
                db.session.add(new_flower)
                db.session.commit()
                return jsonify({'message': 'Flower created successfully'})
            except:
                return jsonify({'message': 'some error occurred during creating the flower'})

@app.route('/edit', methods=['POST'])
@cross_origin()
def edit_flower():
    if request.method == 'POST':
        edited_flower = request.get_json()
        older_version = Flower_Objects.query.filter_by(name=edited_flower.get('name')).first()
        if older_version:
            flower_dict = {'name': older_version.name, 'color': older_version.color, 'height': older_version.height, 'price': older_version.price}
            flower_dict['color'] = edited_flower.get('color')
            flower_dict['height'] = edited_flower.get('height')
            flower_dict['price'] = edited_flower.get('price')
            try:
                older_version.color = flower_dict['color']
                older_version.height = flower_dict['height']
                older_version.price = flower_dict['price']
                db.session.commit()
                return jsonify(flower_dict)
            except:
                return 'some error occurred while editing'
        else:
            return 'the flower, you are trying to edit, does not exist'


@app.route('/get', methods=['GET'])
@cross_origin()
def get_flower_on_view():
    try:
        flowers = Flower_Objects.query.all()
        flower_list = []
        for flower in flowers:
            flower_dict = {'name': flower.name, 'color': flower.color, 'height': flower.height, 'price': flower.price}
            flower_list.append(flower_dict)
        return jsonify(flower_list)
    except Exception as e:
        return jsonify({'error': 'some error occurred during getting on view', 'details': str(e)}), 500  

if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'redis'
    app.app_context().push()
    try:
        db.create_all()
    except Exception as e:
        print(e)
    app.run(debug=True)
